import { Metadata } from "next";
import { DataTable } from "@/components/tenants/data-table";
import { columns } from "@/components/tenants/columns";
import { Inquilino } from "@/types";
import { inquilinos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Inquilinos",
};

async function getData(): Promise<Inquilino[]> {
  // Fetch data from your API here.
  return inquilinos;
}

export default async function Tenants() {
  const data = await getData();

  return (
    <main className="min-h-screen flex flex-col">
      <div className="text-2xl font-bold mb-2">Inquilinos</div>
      <p className="text-sm text-gray-500 mb-4">
        Consumo de agua por inquilino en el último mes
      </p>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
