import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { inquilinos } from "@/lib/data";

export default function Tenants() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inquilinos</CardTitle>
        <CardDescription>
          Hay {inquilinos.length} sin haber pagado el mes anterior.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-7 overflow-hidden">
          {inquilinos.map((inquilino, index) => {
            return (
              <div key={index} className="flex items-center flex-wrap gap-2">
                {/* Avatar */}
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-sky-100 text-sky-800">
                    {inquilino.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Información del usuario */}
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">
                    {inquilino.name}
                  </p>
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">
                    Dpto {inquilino.dpto}
                  </p>
                </div>
                {/* Precio */}
                <div className="text-right font-medium">
                  {inquilino.pagoMensual} Bs
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
