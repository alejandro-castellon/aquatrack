import BillingCalculator from "@/components/billing";

export default function Billing() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="text-2xl font-bold mb-4">Facturación</div>
      <p className="text-sm text-gray-600 mb-4">
        Calculadora de consumo de agua del mes de{" "}
        {new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toLocaleString("es-ES", { month: "long" })}{" "}
        de {new Date().getFullYear()}.
      </p>
      <BillingCalculator />
    </main>
  );
}
