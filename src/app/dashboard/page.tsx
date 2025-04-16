import { Logo } from "@/components/ui/home/logo";
import InquilinosTable from "@/components/dashboard/table";
export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="right-0 left-0 top-0 py-4 px-4 flex items-center justify-between bg-sky-500">
        <aside className="flex items-center gap-[2px]">
          <Logo w={40} h={30} />
        </aside>
      </header>
      <section className="flex-1 p-4">
        <div className="text-2xl font-bold mb-4">Inquilinos</div>
        <InquilinosTable />
      </section>
    </main>
  );
}
