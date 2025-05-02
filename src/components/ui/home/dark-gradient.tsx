import { ReactNode, HTMLAttributes } from "react";

interface DarkWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const DarkWrapper: React.FC<DarkWrapperProps> = ({ children, ...props }) => (
  <section
    {...props}
    className={`relative overflow-hidden bg-gray-900 ${props.className || ""}`}
  >
    <div
      className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(7, 89, 133, 0.2) 4.54%, rgba(56, 189, 248, 0.26) 34.2%, rgba(7, 89, 133, 0.1) 77.55%)",
      }}
    />
    <div className="relative">{children}</div>
  </section>
);

export default DarkWrapper;
