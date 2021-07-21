import React from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CovidCasesProps } from "../utils/interfaces";

type CasesChartProps = {
  covidCases: CovidCasesProps;
};

const CasesChart = ({ covidCases }: CasesChartProps) => {
  const data = covidCases.cases.map((cases, index) => ({
    date:
      cases.x.toString().slice(8, 10) + "/" + cases.x.toString().slice(5, 7),
    Ca: cases.y,
  }));

  function nFormatter(num: number, digits: number) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

  return (
    <ResponsiveContainer width={"100%"} aspect={1.4}>
      <ComposedChart
        data={data}
        margin={{
          top: 15,
          right: 35,
          left: 15,
          bottom: 25,
        }}
      >
        <CartesianGrid vertical={false} />
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="1%" stopColor="#fc4e4e" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#f3f3f3" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" style={{ fontSize: "0.85em" }} />
        <YAxis
          style={{ fontWeight: "bold", fontSize: "0.85em" }}
          tickFormatter={(tick) => {
            return nFormatter(tick, 1);
          }}
          domain={[0, "dataMax + 2000"]}
          allowDataOverflow={true}
        />
        <Tooltip
          wrapperStyle={{
            backgroundColor: "#ccc",
            borderRadius: "40px",
            border: "none",
            fontSize: "0.75em",
          }}
          labelFormatter={(e) => "Ngày: " + e}
          formatter={(value: number) =>
            new Intl.NumberFormat("en").format(value)
          }
        />
        {/* <Legend
          wrapperStyle={{
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
          formatter={(value: number) => "Số ca nhiễm"}
        />{" "} */}
        <Area
          type="monotone"
          dataKey="Ca"
          stackId="1"
          stroke="#fc4e4e"
          fill="url(#colorUv)"
          //   label={{ position: "right", formatter: labelFormatter }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CasesChart;
