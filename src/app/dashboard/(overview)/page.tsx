import { Metadata } from "next";
import CardsOverview from "@/components/dashboard/cards-overview";
import { Chart } from "@/components/dashboard/chart";
import Tenants from "@/components/dashboard/tenants";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default function DashboardPage() {
  return (
    <main>
      <div className="text-2xl font-bold mb-2">Dashboard</div>
      <p className="text-sm text-gray-500 mb-4">
        Aquí puedes ver el resumen de los inquilinos y sus consumos.
      </p>
      <CardsOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Chart />
        </div>
        <Tenants />
      </div>
    </main>
  );
}
