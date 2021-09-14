import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import { nFormatter } from "../../utils/dataFormatter";

const Graph = ({ covidDataProvince }) => {
  return (
    <div className="py-4">
      <ResponsiveContainer width="100%" aspect={1.6}>
        <BarChart
          width={500}
          height={300}
          data={covidDataProvince
            .sort((A: any, B: any) => {
              if (Number(A.y) < Number(B.y)) return 1;
              if (Number(A.y) > Number(B.y)) return -1;
              return 0;
            })
            .slice(0, 6)}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis dataKey="x" style={{ fontSize: "0.75em" }} />
          <YAxis
            style={{ fontWeight: "bold", fontSize: "0.75em" }}
            tickFormatter={(tick) => {
              return nFormatter(tick, 1);
            }}
            domain={[0, "auto"]}
            allowDataOverflow={true}
          />
          <Tooltip
            wrapperStyle={{
              backgroundColor: "#ccc",
              borderRadius: "40px",
              border: "none",
              fontSize: "0.75em",
              color: "black",
            }}
            labelFormatter={(e) => "" + e}
            formatter={(value: number) =>
              new Intl.NumberFormat("en").format(value)
            }
          />

          <Bar dataKey="y" fill="#ff7474e6" name="Ca nhiễm" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Graph;
