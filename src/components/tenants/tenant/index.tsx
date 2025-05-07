import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users } from "lucide-react";
import Data from "./data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Inquilino } from "@/types";
interface TenantProps {
  selectedTenant: Inquilino;
}

export default function TenantData({ selectedTenant }: TenantProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarFallback className="text-2xl bg-sky-100 text-sky-800">
                  {selectedTenant.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{selectedTenant.name}</h3>
              <p className="text-gray-500">{selectedTenant.dpto}</p>

              <div className="w-full mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{selectedTenant.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">+52 (55) 1234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">3 residentes</span>
                </div>
              </div>

              <div className="w-full mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Fecha de ingreso</p>
                    <p className="font-medium">15/03/2022</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Tipo de unidad</p>
                    <p className="font-medium">2 Dormitorios</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Resumen de Consumo</CardTitle>
          </CardHeader>
          <CardContent>
            <Data tenantId={selectedTenant.id} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
