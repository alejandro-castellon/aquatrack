import {
  Droplet,
  Gauge,
  Wifi,
  Smartphone,
  Building,
  ChartLine,
} from "lucide-react";

const features = [
  {
    icon: <Droplet className="h-8 w-8 text-sky-600" />,
    title: "Mediciones Precisas",
    description:
      "Mediciones exactas del consumo de agua con tecnología de alta precisión",
  },
  {
    icon: <Gauge className="h-8 w-8 text-sky-600" />,
    title: "Monitoreo en Tiempo Real",
    description:
      "Visualización instantánea de consumos y alertas automáticas ante consumos anómalos que podrían indicar fugas",
  },
  {
    icon: <Wifi className="h-8 w-8 text-sky-600" />,
    title: "Tecnología IoT",
    description: "Conectividad avanzada para transmisión eficiente de datos",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-sky-600" />,
    title: "Aplicación Intuitiva",
    description: "Acceso desde cualquier dispositivo con interfaz amigable",
  },
  {
    icon: <Building className="h-8 w-8 text-sky-600" />,
    title: "Gestión para Administradores",
    description:
      "Diseñado específicamente para condominios y edificios residenciales",
  },
  {
    icon: <ChartLine className="h-8 w-8 text-sky-600" />,
    title: "Análisis de Datos",
    description:
      "Estadísticas detalladas para optimizar el consumo de agua y reportes personalizados",
  },
];

const Features = () => {
  return (
    <section id="features" className="pt-24 sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block rounded bg-sky-100 px-3 py-1 text-sm text-sky-700 mb-4">
            Características
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tecnología <span className="text-sky-600">Destacada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Nuestra solución integral ofrece todo lo que necesita para un
            control eficiente del agua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-3 bg-sky-50 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
