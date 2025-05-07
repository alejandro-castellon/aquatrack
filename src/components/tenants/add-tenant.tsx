"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

export default function AddTenant() {
  const [showAddTenantDialog, setShowAddTenantDialog] = useState(false);

  return (
    <Dialog open={showAddTenantDialog} onOpenChange={setShowAddTenantDialog}>
      <DialogTrigger asChild>
        <Button className="bg-sky-600 hover:bg-sky-700 ml-auto">
          <Plus className="sm:mr-2 h-4 w-4" />
          <p className="hidden sm:block">Agregar Inquilino</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Inquilino</DialogTitle>
          <DialogDescription>
            Complete la información del nuevo inquilino. Todos los campos son
            obligatorios.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" placeholder="Nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" placeholder="Apellido" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="correo@ejemplo.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" placeholder="123 456 78" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Departamento</Label>
              <Input id="unit" placeholder="Ej: 101" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tenantType">Tipo de Unidad</Label>
            <Select defaultValue="1">
              <SelectTrigger id="tenantType">
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Dormitorio</SelectItem>
                <SelectItem value="2">2 Dormitorios</SelectItem>
                <SelectItem value="3">3 Dormitorios</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setShowAddTenantDialog(false)}
          >
            Cancelar
          </Button>
          <Button
            className="bg-sky-600 hover:bg-sky-700"
            onClick={() => setShowAddTenantDialog(false)}
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
