"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Inquilino, status } from "@/types";

// Helper function to get status color
const getStatusColor = (status: number): string => {
  switch (status) {
    case 0:
      return "green";
    case 1:
      return "yellow";
    case 2:
      return "red";
    default:
      return "gray";
  }
};
const statusColorMap = {
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-600",
  red: "bg-red-100 text-red-600",
  gray: "bg-gray-100 text-gray-600",
};
export const columns: ColumnDef<Inquilino>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          Inquilino
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const email = row.original.email as string;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-sky-100 text-sky-800">
              {name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500 hidden sm:block">{email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "dpto",
    header: "Departamento",
  },
  {
    accessorKey: "rooms",
    header: "Tipo",
    cell: ({ row }) => {
      const roomsValue = row.getValue("rooms") as string;
      return (
        <span>
          {roomsValue}
          {roomsValue === "1" ? " Dormitorio" : " Dormitorios"}
        </span>
      );
    },
  },
  {
    accessorKey: "consumoMensual",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Consumo Mensual
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("consumoMensual"));
      return <div className="text-center font-medium">{amount} L</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const statusValue = row.getValue("status") as status;
      const statusText = status[statusValue];
      const statusColor = getStatusColor(
        statusValue
      ) as keyof typeof statusColorMap;
      return (
        <div
          className={`font-medium ${statusColorMap[statusColor]} rounded-md px-2 py-1 inline-block`}
        >
          {statusText}
        </div>
      );
    },
  },
  {
    accessorKey: "pagoMensual",
    header: () => <div className="text-right">Monto pagado</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("pagoMensual"));
      const formatted = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);

      return <div className="text-right font-medium">Bs {formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copiar email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver cliente</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
