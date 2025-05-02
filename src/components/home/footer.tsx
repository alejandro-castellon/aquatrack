import { Mail, Phone, MapPin } from "lucide-react";
import DarkWrapper from "../ui/home/dark-gradient";
import { Logo } from "../ui/home/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DarkWrapper className="text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo w={50} h={50} />
            </div>
            <p className="text-gray-300 mb-4">
              Innovando en la gestión de recursos hídricos con tecnología IoT
              para edificios y condominios.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-sky-600 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-sky-600 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-sky-600 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Empresa
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sky-400 mr-2" />
                <a
                  href="mailto:info@aquatrack.com"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  admin@aquatrack.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-sky-400 mr-2" />
                <a
                  href="tel:+123456789"
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  +591 (653) 69944
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sky-400 mr-2 mt-1" />
                <span className="text-gray-300">
                  Av. Waldo Ballivian 1023,
                  <br />
                  Ciudad Cochabamba
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AquaTrack. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm">
                Términos
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </DarkWrapper>
  );
};

export default Footer;
