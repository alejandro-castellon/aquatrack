import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section
        id="products"
        className="w-full py-14 md:pt-32 bg-gradient-to-b from-white to-sky-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded bg-sky-100 px-3 py-1 text-sm text-sky-700 mb-4">
                Productos
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestras soluciones{" "}
                <span className="text-sky-600">inteligentes</span>
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Hardware y software diseñados para transformar la gestión del
                agua
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Medidor Inteligente */}
              <div className="bg-white rounded-xl shadow-lg p-6 order-2 md:order-1">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-sky-800 mb-4">
                    Medidor Inteligente AquaSense
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Instalación no invasiva
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Precisión de ±0.5%
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">Conectividad WiFi</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Almacenamiento de datos local
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Resistente al agua IP68
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Detección de flujo inverso
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Nuestro medidor AquaSense se instala fácilmente en cualquier
                    sistema de tuberías existente, transmitiendo datos de
                    consumo en tiempo real a nuestra plataforma.
                  </p>
                  <div className="mt-auto">
                    <Button className="bg-sky-600 hover:bg-sky-700 w-full sm:w-auto">
                      Ver especificaciones técnicas
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-sky-600/20 rounded-full blur-xl"></div>
                  <Image
                    src="/medidor.png"
                    alt="Medidor inteligente"
                    width={400}
                    height={400}
                    className="relative rounded-full object-cover z-10"
                  />
                </div>
              </div>
            </div>

            {/* Plataforma Software */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
              <div className="flex justify-center items-center">
                <Image
                  src="/dashboard.webp"
                  alt="Plataforma Aquatrack Dashboard"
                  width={650}
                  height={300}
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-sky-800 mb-4">
                    Plataforma AquaTrack
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Dashboard personalizable
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Análisis en tiempo real
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Reportes automáticos
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Alertas configurables
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Acceso multi-dispositivo
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Gestión de múltiples edificios
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Nuestra plataforma web intuitiva permite a administradores e
                    inquilinos monitorear el consumo de agua, recibir alertas y
                    generar informes detallados desde cualquier dispositivo.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="https://www.youtube.com/watch?v=ZbLlM6jBxLY"
                      target="_blank"
                    >
                      <Button className="bg-sky-600 hover:bg-sky-700 w-full sm:w-auto">
                        Ver demostración
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-10 sm:py-20 bg-sky-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded bg-sky-100 px-3 py-1 text-sm text-sky-700 mb-4">
                Proceso
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Cómo funciona <span className="text-sky-600">Aquatrack</span>
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Implementación sencilla y resultados inmediatos
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-900 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Instalación</h3>
              <p className="text-gray-600">
                Instalamos nuestros medidores IoT en cada punto de entrada de
                agua, sin obras complejas ni demoras
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-900 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Configuración</h3>
              <p className="text-gray-600">
                Configuramos la plataforma para cada edificio, creando perfiles
                para administradores e inquilinos
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-900 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Monitoreo</h3>
              <p className="text-gray-600">
                Comienza a recibir datos en tiempo real y a gestionar el consumo
                de agua de forma eficiente
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Image
              src="/instalacion.png"
              alt="Plataforma Aquatrack en acción"
              width={700}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
