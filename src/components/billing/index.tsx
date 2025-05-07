"use client";

import { useState } from "react";
import { inquilinos } from "@/lib/data";
import { Inquilino } from "@/types";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function BillingCalculator() {
  const [litrosTotales, setLitrosTotales] = useState("");
  const [montoTotal, setMontoTotal] = useState("");
  const [resultados, setResultados] = useState<
    (Inquilino & { porcentaje: number; monto: number })[]
  >([]);

  const calcularDistribucion = () => {
    const totalLitros = inquilinos.reduce(
      (sum, t) => sum + t.consumoMensual,
      0
    );
    const monto = parseFloat(montoTotal);

    const distribucion = inquilinos.map((t) => {
      const porcentaje = t.consumoMensual / totalLitros;
      const montoAsignado = porcentaje * monto;

      return {
        ...t,
        porcentaje,
        monto: montoAsignado,
      };
    });

    setResultados(distribucion);
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Litros totales del edificio
          </Label>
          <Input
            type="number"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            value={litrosTotales}
            onChange={(e) => setLitrosTotales(e.target.value)}
            placeholder="Ej: 5500"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700">
            Monto total a pagar (Bs.)
          </Label>
          <Input
            type="number"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
            value={montoTotal}
            onChange={(e) => setMontoTotal(e.target.value)}
            placeholder="Ej: 320"
          />
        </div>

        <Button onClick={calcularDistribucion}>Calcular distribución</Button>
      </div>

      {resultados.length > 0 && (
        <div className="overflow-auto">
          <table className="min-w-full table-auto border mt-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Inquilino</th>
                <th className="px-4 py-2 text-left">Depto</th>
                <th className="px-4 py-2 text-right">Consumo (L)</th>
                <th className="px-4 py-2 text-right">% del total</th>
                <th className="px-4 py-2 text-right">Monto (Bs.)</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="px-4 py-2">{t.name}</td>
                  <td className="px-4 py-2">{t.dpto}</td>
                  <td className="px-4 py-2 text-right">{t.consumoMensual}</td>
                  <td className="px-4 py-2 text-right">
                    {(t.porcentaje * 100).toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-right">{t.monto.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button className="mt-4">Guardar</Button>
        </div>
      )}
    </main>
  );
}
