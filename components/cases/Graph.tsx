import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CovidCasesProps, ChartType, RangeType } from "../../utils/interfaces";

export type CasesChartProps = {
  covidCases: CovidCasesProps;
  type: ChartType;
  range: RangeType;
};

const formatRange = (range: RangeType, maxRange: number) => {
  switch (range) {
    case "all":
      return maxRange;
    case "month":
      return 31;
    case "week":
      return 7;
    default:
      maxRange;
  }
};

const Graph = ({ covidCases, type, range }: CasesChartProps) => {
  const numberOfDate = covidCases.cases.length;
  const data = covidCases.cases
    .slice(numberOfDate - formatRange(range, numberOfDate), numberOfDate)
    .map((cases) => ({
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
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i: number;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

  return (
    <ResponsiveContainer width={"100%"} aspect={1.3}>
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
            <stop offset="5%" stopColor="#ff2b2b" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#f3f3f3" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" style={{ fontSize: "0.85em" }} />
        <YAxis
          style={{ fontWeight: "bold", fontSize: "0.85em" }}
          tickFormatter={(tick) => {
            return nFormatter(tick, 1);
          }}
          domain={[0, "auto"]}
          allowDataOverflow={true}
        />
        <Tooltip
          wrapperStyle={{
            backgroundColor: "#ccc",
            borderRadius: "60px",
            border: "none",
            fontSize: "0.75em",
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
            dataKey="Ca"
            stackId="4"
            stroke="#fc4e4e"
            fill="url(#colorUv)"
            name="Ca nhiễm"
            //   label={{ position: "right", formatter: labelFormatter }}
          />
        ) : (
          <Bar
            type="monotone"
            dataKey="Ca"
            stackId="2"
            barSize={20}
            stroke="#df3737"
            fill="#ff7474e6"
            name="Ca nhiễm"
          />
        )}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Graph;
