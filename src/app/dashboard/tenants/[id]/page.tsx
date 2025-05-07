import TenantData from "@/components/tenants/tenant";
import { inquilinos } from "@/lib/data";

export default async function Tenant({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const inquilinoId = await params;
  const inquilinoIndex: number = inquilinos.findIndex(
    (inquilino) => inquilino.id === inquilinoId.id
  );
  if (inquilinoIndex === -1) {
    return <div>El inquilino no existe</div>;
  }

  return (
    <main>
      <div className="text-2xl font-bold mb-2">Inquilino</div>
      <p className="text-sm text-gray-500 mb-4">
        Información detallada y consumo de agua
      </p>
      <TenantData selectedTenant={inquilinos[inquilinoIndex]} />
    </main>
  );
}
