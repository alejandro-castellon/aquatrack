import { ReactNode, HTMLAttributes } from "react";
import Image from "next/image";

interface GradientWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  wrapperClassName?: string;
}

const GradientWrapper: React.FC<GradientWrapperProps> = ({
  children,
  wrapperClassName,
  ...props
}) => (
  <div {...props} className={`relative pt-28 ${props.className || ""}`}>
    <div
      className={`absolute inset-0 w-full h-full ${
        wrapperClassName || ""
      } overflow-hidden`}
    >
      <Image
        src="/agua.jpg"
        alt="Water background"
        fill
        sizes="100vw"
        priority={true}
        className="object-cover object-top"
      />
    </div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
