"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Thermometer } from "lucide-react";
import { connectMqttClient } from "@/lib/mqtt";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function Page() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [client] = useState(connectMqttClient()); // Usar el cliente MQTT del layout
  const [chartPress, setChartPress] = useState<{ value: number }[]>([]);
  const [chartTemp, setChartTemp] = useState<{ value: number }[]>([]);

  useEffect(() => {
    if (client) {
      client.on("message", (topic: string, message: Buffer) => {
        const payload = JSON.parse(message.toString());

        setChartPress((prevData) => [...prevData, { value: payload.flujo }]);
        setChartTemp((prevData) => [...prevData, { value: payload.litros }]);
      });
    }
  }, [client]);

  const handleStart = () => {
    if (client) {
      // Publicar un mensaje al ESP para que comience a enviar datos
      client.publish("medidor/inicio", "1");
      setIsRunning(true);
    }
  };

  const handleCancel = () => {
    if (client) {
      // Publicar un mensaje al ESP para que detenga el envío de datos
      client.publish("medidor/inicio", "0");
    }
    setIsRunning(false);
    setChartPress([]);
    setChartTemp([]);
  };

  return (
    <main className="p-4">
      <div className="text-3xl font-bold mb-4">Inquilino</div>

      <div className="lg:grid lg:grid-cols-2">
        {/* Sección de tarjetas */}
        <div className="flex flex-col space-y-4 lg:space-y-4 lg:w-3/4 lg:ml-auto mt-10">
          <Card className="flex-1">
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center justify-between">
                <div className="flex">
                  <Gauge size={24} className="mr-2" />
                  Caudal
                </div>
                L/s
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center bg-sky-100 dark:bg-gray-800 m-4">
              <div className="text-5xl font-bold mt-2">
                {chartPress.length > 0
                  ? chartPress[chartPress.length - 1].value.toFixed(2)
                  : "0.00"}
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center justify-between">
                <div className="flex">
                  <Thermometer size={24} className="mr-1" />
                  Consumo de agua
                </div>
                Litros
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center bg-sky-100 dark:bg-gray-800 m-4">
              <div className="text-5xl font-bold mt-2">
                {chartTemp.length > 0
                  ? chartTemp[chartTemp.length - 1].value.toFixed(2)
                  : "0.00"}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1 flex lg:flex-col lg:items-start items-center justify-center gap-4 my-4 pb-10">
          <Button
            className="bg-sky-500 px-6 py-3 text-xl w-full lg:w-3/4"
            onClick={handleStart}
            disabled={isRunning}
          >
            Comenzar
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-sky-500 px-6 py-3 text-xl w-full lg:w-3/4"
                disabled={!isRunning}
              >
                Cancelar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Cancelar</DialogTitle>
                <DialogDescription>
                  ¿Está seguro que desea parar el envío de datos?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={handleCancel}
                  >
                    Parar envío de datos
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
