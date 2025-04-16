"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { autoclaves } from "@/lib/data";

export default function InquilinosTable() {
  const router = useRouter();

  const handleView = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Ubicación</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {autoclaves.map((autoclave) => (
          <TableRow key={autoclave.id}>
            <TableCell className="font-medium">{autoclave.id}</TableCell>
            <TableCell>{autoclave.name}</TableCell>
            <TableCell>{autoclave.location}</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end space-x-2">
                <Button
                  className="h-7 bg-sky-500 flex items-center justify-center"
                  onClick={() => handleView(autoclave.id)}
                >
                  Ver
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="h-7 flex items-center justify-center">
                      <Trash2 className="text-red-600" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>
                        Esta seguro que quiere eliminar la autoclave.
                      </DialogTitle>
                      <DialogDescription>
                        Se quitara todo el contenido de la autoclave.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="destructive">
                          Eliminar Autoclave
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
