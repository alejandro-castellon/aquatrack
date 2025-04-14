import { Logo } from "@/components/ui/home/logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex w-full md:w-1/2 bg-sky-900 flex-col justify-center text-white p-10">
        <Logo w={80} h={30} />
        <p className="text-sm mt-2">
          Aquatrack es la solución perfecta para medir el consumo de agua en
          departamentos. Con medidores inteligentes y una plataforma
          centralizada, podrás monitorear tu uso de agua de manera fácil y
          eficiente.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen md:min-h-0">
        <Image
          className="flex justify-center mb-6"
          src="/icon.png"
          alt="Company icon"
          width={100}
          height={100}
        />
        <h2 className="text-center text-2xl mb-12">WELCOME</h2>
        <Link href="/dashboard">
          <Button className="flex items-center gap-x-2 font-medium text-sm text-white bg-sky-500 hover:bg-gray-600 active:bg-blue-700 ">
            Iniciar Sesión
          </Button>
        </Link>
      </div>
    </main>
  );
}
