import InquilinosTable from "@/components/dashboard/table";
export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 p-4">
        <div className="text-2xl font-bold mb-4">Inquilinos</div>
        <InquilinosTable />
      </section>
    </main>
  );
}
