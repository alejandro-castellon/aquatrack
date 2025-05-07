export interface User {
  id: string; // El ID del usuario, igual al ID de auth de Supabase
  email: string; // El correo del usuario
  name: string; // El nombre del usuario
  gender: string; // El sexo del usuario
  phone: string; // El número de teléfono del usuario
  created_at: string; // Fecha de creación del usuario en formato ISO
  fecha_nacimiento: string; // Fecha de nacimiento del usuario en formato ISO
  ci: string; // Carnet de identidad del usuario
}

export enum status {
  Normal = 0,
  Alto = 1,
  Crítico = 2,
}

export interface Inquilino {
  id: string; // ID del inquilino
  name: string; // Nombre del inquilino
  email: string; // Correo del inquilino
  dpto: string; // Departamento del inquilino
  rooms: string; // Tipo de depto (1, 2, 3, etc.)
  consumoMensual: number; // Consumo mensual del inquilino
  status: status; // Estado de consumo del inquilino (normal, alto, critico, etc.)
  pagoMensual: number; // Pago mensual del inquilino
}
