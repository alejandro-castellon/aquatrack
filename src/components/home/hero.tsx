import GradientWrapper from "@/components/ui/home/gradient";
import NavLink from "@/components/ui/home/navlink";

/*import { Button } from "@/components/ui/button";
import { Droplet, Building } from "lucide-react";

const Heroe = () => {
  return (
    <div className="relative min-h-screen flex items-center water-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Controle su consumo de agua sin esfuerzo con{" "}
              <span className=" bg-clip-text text-sky-600">Aquatrack</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Optimice la gestión del agua en edificios y condominios con
              nuestra tecnología IoT integrada para monitoreo preciso y en
              tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-white water-gradient rounded">
                Solicitar Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-500 text-sky-600 hover:bg-sky-50 rounded"
              >
                Conocer Más
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-100 rounded-full">
                  <Droplet className="h-6 w-6 text-sky-600" />
                </div>
                <p className="font-medium text-gray-700">Ahorro de Agua</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-100 rounded-full">
                  <Building className="h-6 w-6 text-sky-600" />
                </div>
                <p className="font-medium text-gray-700">
                  Ideal para Edificios
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-teal-500 rounded-xl blur-lg opacity-60"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-sky-50 rounded-lg flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-28 h-28 rounded-full water-gradient flex items-center justify-center mb-4">
                    <Droplet className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-sky-700">Medidor IoT</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Tecnología inteligente para monitoreo en tiempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};*/

const Hero = () => (
  <GradientWrapper
    id="hero"
    wrapperClassName="inset-0"
    className="text-gray-600 h-screen"
  >
    <div className="space-y-8 max-w-4xl mx-auto text-center sm:mt-24">
      <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
        Controle su consumo de agua sin esfuerzo con{" "}
        <span className=" bg-clip-text text-sky-600">Aquatrack</span>
      </h1>
      <p className="max-w-xl mx-auto">
        Aquatrack permite monitorear tu consumo de agua de tu departamento,
        promoviendo la sostenibilidad y el ahorro. Experimente la facilidad de
        gestionar su consumo de agua como nunca antes.
      </p>
      <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
        <NavLink
          href="/dashboard"
          className="flex items-center gap-x-2 text-white water-gradient"
        >
          Contáctanos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
        <NavLink
          href="#servicios"
          className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 border border-sky-300 bg-white hover:bg-sky-100 active:bg-sky-200 "
        >
          Conocer Más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  </GradientWrapper>
);

export default Hero;
