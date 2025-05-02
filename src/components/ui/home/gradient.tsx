import { ReactNode, HTMLAttributes } from "react";

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
      className={`absolute inset-0 w-full h-full${wrapperClassName || ""}`}
      style={{
        backgroundImage: `url(/agua.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        zIndex: -1,
      }}
    />
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
