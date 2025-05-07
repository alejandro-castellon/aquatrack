import { Inquilino } from "@/types";

export const inquilinos: Inquilino[] = [
  {
    id: "user1",
    name: "Juan Pérez",
    email: "j@example.com",
    dpto: "101",
    rooms: "1",
    consumoMensual: 50,
    status: 0,
    pagoMensual: 25,
  },
  {
    id: "user2",
    name: "María López",
    email: "m@example.com",
    dpto: "102",
    rooms: "2",
    consumoMensual: 150,
    status: 2,
    pagoMensual: 100,
  },
  {
    id: "user3",
    name: "Roberto Gómez",
    email: "r@example.com",
    dpto: "103",
    rooms: "3",
    consumoMensual: 100,
    status: 1,
    pagoMensual: 50,
  },
];

export const chartData = [
  { date: "2024-05", litros: 373, pago: 290 },
  { date: "2024-06", litros: 301, pago: 340 },
  { date: "2024-07", litros: 245, pago: 180 },
  { date: "2024-08", litros: 409, pago: 320 },
  { date: "2024-09", litros: 59, pago: 110 },
  { date: "2024-10", litros: 261, pago: 190 },
  { date: "2024-11", litros: 327, pago: 350 },
  { date: "2024-12", litros: 292, pago: 210 },
  { date: "2025-01", litros: 342, pago: 380 },
  { date: "2025-02", litros: 137, pago: 220 },
  { date: "2025-03", litros: 120, pago: 170 },
  { date: "2025-04", litros: 138, pago: 190 },
];
