import {
  ChartColumn,
  ReceiptText,
  Settings,
  Users,
  LogOut,
} from "lucide-react";
import { SidebarLink } from "@/components/ui/sidebar";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <ChartColumn className="h-6 w-6 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Inquilinos",
    href: "/dashboard/tenants",
    icon: (
      <Users className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Facturación",
    href: "/dashboard/billing",
    icon: (
      <ReceiptText className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Configuración",
    href: "/dashboard/settings",
    icon: (
      <Settings className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Logout",
    href: "/login",
    icon: (
      <LogOut className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];

export default function NavLinks() {
  return (
    <div className="ml-2 md:mt-6 flex md:flex-col gap-6 md:gap-4 flex-row">
      {links.map((link, idx) => (
        <SidebarLink key={idx} link={{ ...link }} />
      ))}
    </div>
  );
}
