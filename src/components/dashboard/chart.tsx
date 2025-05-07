"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { chartData } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  litros: {
    label: "Litros",
    color: "hsl(var(--chart-3))",
    unit: "L",
  },
  pago: {
    label: "Monto",
    color: "hsl(var(--chart-2))",
    unit: "Bs",
  },
} satisfies ChartConfig;

export function Chart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("litros");

  const total = React.useMemo(
    () => ({
      litros: chartData.reduce((acc, curr) => acc + curr.litros, 0),
      pago: chartData.reduce((acc, curr) => acc + curr.pago, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Consumo Histórico</CardTitle>
          <CardDescription>
            Mostrando el consumo de agua y el monto pagado por los inquilinos en
            el último año.
          </CardDescription>
        </div>
        <div className="flex">
          {["litros", "pago"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] md:h-[45vh] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const dateParts = value.split("-");
                const year = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]) - 1; // Subtract 1 to get zero-based month

                const date = new Date(year, month, 1);
                return date.toLocaleDateString("es-ES", {
                  month: "short",
                });
              }}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => {
                    const dateParts = value.split("-");
                    const year = parseInt(dateParts[0]);
                    const month = parseInt(dateParts[1]) - 1; // Subtract 1 to get zero-based month

                    const date = new Date(year, month, 1);
                    return date.toLocaleDateString("es-ES", {
                      month: "short",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
