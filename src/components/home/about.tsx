import {
  CheckCircle,
  Target,
  Award,
  Lightbulb,
  Building,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const adminBenefits = [
  "Detección temprana de fugas y anomalías",
  "Facturación precisa y justa del consumo",
  "Reducción de costos operativos",
  "Datos históricos para planificación",
  "Gestión centralizada de múltiples unidades",
];

const residentBenefits = [
  "Visualización en tiempo real del consumo",
  "Notificaciones de consumo inusual",
  "Comparativas con períodos anteriores",
  "Consejos personalizados de ahorro",
  "Control transparente de los gastos",
];

export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-sky-50"
      >
        <div className="container mx-auto px-4 md:px-6 mt-14 sm:mt-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded bg-sky-100 px-3 py-1 text-sm text-sky-700 mb-4">
                Empresa
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Sobre <span className="text-sky-600">Aquatrack</span>
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Transformando la gestión del agua con tecnología e innovación
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-sky-600">
                    Quienes Somos
                  </h3>
                  <p className="text-gray-600">
                    AquaTrack es una empresa especializada en soluciones IoT
                    para el monitoreo y gestión eficiente del consumo de agua en
                    edificios y condominios. Fundada por expertos en ingeniería
                    hidráulica y tecnologías de la información, nuestra misión
                    es transformar la manera en que las comunidades gestionan
                    este recurso vital.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-sky-600">
                    Nuestra Misión
                  </h3>
                  <p className="text-gray-600">
                    Empoderar a administradores e inquilinos con tecnología
                    inteligente que permita un consumo de agua más eficiente,
                    sostenible y transparente, contribuyendo a la conservación
                    de este recurso vital y generando ahorros significativos.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-2xl font-bold text-sky-600">
                    Nuestra Propuesta de Valor
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <Target className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Solución Integral</h4>
                          <p className="text-sm text-gray-600">
                            Combinamos hardware de alta precisión con software
                            intuitivo para ofrecer una solución completa de
                            monitoreo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">
                            Tecnología Innovadora
                          </h4>
                          <p className="text-sm text-gray-600">
                            Utilizamos IoT y análisis de datos avanzados para
                            proporcionar información procesable en tiempo real.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">
                            Resultados Garantizados
                          </h4>
                          <p className="text-sm text-gray-600">
                            Nuestros clientes experimentan ahorros de hasta un
                            30% en sus facturas de agua desde el primer mes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">
                            Compromiso Ambiental
                          </h4>
                          <p className="text-sm text-gray-600">
                            Cada sistema instalado contribuye a la conservación
                            de millones de litros de agua anualmente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-sky-600/20 rounded-xl blur-xl"></div>
                <Image
                  src="/empresa.jpg"
                  alt="Equipo Aquatrack"
                  width={720}
                  height={400}
                  className="relative rounded-2xl object-cover z-10"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-sky-100">
                <blockquote className="text-gray-600 italic">
                  En Aquatrack creemos que la tecnología debe servir para crear
                  un futuro más sostenible. Cada gota cuenta, y nuestra misión
                  es asegurarnos de que ninguna se desperdicie.
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
                    <span className="text-sky-800 font-bold">AC</span>
                  </div>
                  <div>
                    <p className="font-bold">Alejandro Castellon</p>
                    <p className="text-sm text-gray-500">CEO y Co-fundador</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 flex flex-col items-center justify-center text-center">
                  <p className="text-3xl font-bold text-sky-600">50+</p>
                  <p className="text-sm text-gray-600">Edificios equipados</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 flex flex-col items-center justify-center text-center">
                  <p className="text-3xl font-bold text-sky-600">5000+</p>
                  <p className="text-sm text-gray-600">Usuarios activos</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 flex flex-col items-center justify-center text-center">
                  <p className="text-3xl font-bold text-sky-600">30%</p>
                  <p className="text-sm text-gray-600">Ahorro promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-20 sm:pb-30 bg-sky-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios para <span className="text-sky-600">Todos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Soluciones diseñadas para administradores de edificios y
              residentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Benefits for Building Admins */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-sky-600 to-sky-700 flex items-center">
                <div className="p-3 bg-white rounded-full">
                  <Building className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">
                  Para Administradores
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {adminBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits for Residents */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 flex items-center">
                <div className="p-3 bg-white rounded-full">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">
                  Para Residentes
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {residentBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-sky-600 text-white">
        <div className="container mx-auto px-4 sm:px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comienza a optimizar el consumo de agua hoy
              </h2>
              <p className="max-w-[600px] text-sky-100 md:text-xl/relaxed mx-auto">
                Solicita una demostración gratuita y descubre cómo Aquatrack
                puede transformar la gestión del agua en tu edificio.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 rounded"
              >
                Solicitar implementación
              </Button>
              <Button
                size="lg"
                className="water-gradient rounded text-white border"
              >
                Contacta un asesor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
