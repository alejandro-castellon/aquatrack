import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
export default function CardsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Promedio Diario
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">418 L</div>
              <p className="text-xs text-gray-500">Por día</p>
            </div>
            <div className="flex items-center text-green-500 text-sm font-medium">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              8.3%
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Consumo Total
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">12,540 L</div>
              <p className="text-xs text-gray-500">Último mes</p>
            </div>
            <div className="flex items-center text-green-500 text-sm font-medium">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              12.5%
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Pago Total
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">3,250 Bs</div>
              <p className="text-xs text-gray-500">Último mes</p>
            </div>
            <div className="flex items-center text-red-500 text-sm font-medium">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              15.2%
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">
            Alertas Activas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500">Requieren atención</p>
            </div>
            <div className="flex items-center text-red-500 text-sm font-medium">
              <ArrowUpRight className="mr-1 h-4 w-4" />2
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
