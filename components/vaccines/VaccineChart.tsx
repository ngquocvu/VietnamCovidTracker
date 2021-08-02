import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Bar,
} from "recharts";
import { nFormatter } from "../../utils/dataFormatter";
import { ChartType } from "../../utils/interfaces";

type VaccineChartProps = {
  vaccineData: { date: string; y: number; z: number }[];
  type: ChartType;
};

const VaccineChart = ({
  vaccineData = [{ date: "29/06", y: 2, z: 3 }],
  type,
}: VaccineChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} aspect={1.4}>
      <ComposedChart
        data={vaccineData}
        margin={{
          top: 15,
          right: 35,
          left: 15,
          bottom: 25,
        }}
      >
        <CartesianGrid vertical={false} />
        <defs>
          <linearGradient id="colorVaccine2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9351fd" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorVaccine1" x1="1" y1="1" x2="0" y2="1">
            <stop offset="15%" stopColor="#00d39e" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" style={{ fontSize: "0.65em" }} />
        <YAxis
          style={{ fontWeight: "bold", fontSize: "0.65em" }}
          tickFormatter={(tick) => {
            return nFormatter(tick, 1);
          }}
          domain={[0, "auto"]}
          orient="left"
          allowDataOverflow={true}
        />

        <Tooltip
          wrapperStyle={{
            backgroundColor: "#ccc",
            borderRadius: "40px",
            border: "none",
            fontSize: "0.65em",
            color: "black",
          }}
          labelFormatter={(e) => "Ngày: " + e}
          formatter={(value: number) =>
            new Intl.NumberFormat("en").format(value)
          }
        />
        {type == "area" ? (
          <Area
            type="monotone"
            dataKey="y"
            name="Đã tiêm 1 mũi"
            activeDot={{ r: 8 }}
            stroke="#35eeb0"
            fill="url(#colorVaccine1)"
            dot={false}
          />
        ) : (
          <Bar
            type="monotone"
            dataKey="y"
            name="Mũi tiêm thứ 1"
            stroke="#35eeb0"
            fill="url(#colorVaccine1)"
          />
        )}
        {type == "area" ? (
          <Area
            type="monotone"
            dataKey="z"
            name="Đã tiêm 2 mũi"
            activeDot={{ r: 8 }}
            stroke="#5f00f7"
            fill="url(#colorVaccine2)"
            dot={false}
          />
        ) : (
          <Area
            type="monotone"
            dataKey="z"
            name="Mũi tiêm thứ 2"
            stroke="#5f00f7"
            fill="url(#colorVaccine2)"
          />
        )}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default VaccineChart;
