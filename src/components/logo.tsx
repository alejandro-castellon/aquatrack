import Image from "next/image";

interface LogoProps {
  w: number;
  h: number;
}

export const Logo: React.FC<LogoProps> = ({ w, h }) => (
  <div className="flex items-center gap-x-2 text-sky-600 font-bold text-2xl sm:text-xl">
    <Image src="/logo.png" alt="Aquatrack logo" width={w} height={h} priority />
    Aquatrack
  </div>
);

export const LogoIcon: React.FC<LogoProps> = ({ w, h }) => (
  <div className="flex items-center gap-x-2 text-sky-600 font-bold text-2xl sm:text-xl">
    <Image src="/logo.png" alt="Aquatrack logo" width={w} height={h} priority />
  </div>
);
