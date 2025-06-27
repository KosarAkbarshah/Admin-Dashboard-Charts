///https://recharts.org/en-US => for charts
// prettier-ignore
// import React from "react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data01 = [
  { hour: "12am", index: 1, value: 170 },
  { hour: "1am", index: 1, value: 180 },
  { hour: "2am", index: 1, value: 150 },
  { hour: "3am", index: 1, value: 20 },
  { hour: "4am", index: 1, value: 200 },
  { hour: "5am", index: 1, value: 300 },
  { hour: "6am", index: 1, value: 400 },
  { hour: "7am", index: 1, value: 200 },
  { hour: "8am", index: 1, value: 100 },
  { hour: "9am", index: 1, value: 150 },
  { hour: "10am", index: 1, value: 160 },
  { hour: "11am", index: 1, value: 170 },
  { hour: "12pm", index: 1, value: 180 },
  { hour: "1pm", index: 1, value: 144 },
  { hour: "2pm", index: 1, value: 166 },
  { hour: "3pm", index: 1, value: 145 },
  { hour: "4pm", index: 1, value: 150 },
  { hour: "5pm", index: 1, value: 170 },
  { hour: "6pm", index: 1, value: 180 },
  { hour: "7pm", index: 1, value: 165 },
  { hour: "8pm", index: 1, value: 130 },
  { hour: "9pm", index: 1, value: 140 },
  { hour: "10pm", index: 1, value: 170 },
  { hour: "11pm", index: 1, value: 180 },
];

const parseDomain = () => [0, Math.max(...data01.map((entry) => entry.value))];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white text-black border border-gray-400 p-2 text-sm">
        <p>{data.hour}</p>
        <p>Value: {data.value}</p>
      </div>
    );
  }
  return null;
};

const SalesTrendChart = () => {
  const [dotRange, setDotRange] = useState([16, 225]);

  useEffect(() => {
    const updateRange = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDotRange([8, 80]);
      } else if (width < 1024) {
        setDotRange([12, 150]);
      } else {
        setDotRange([16, 225]);
      }
    };

    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const domain = parseDomain();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 max-h-[32rem] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Trend</h2>
      <div className="space-y-2">
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <div key={day} className="h-14">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                <XAxis
                  type="category"
                  dataKey="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{
                    value: day,
                    position: "insideRight",
                    style: { fill: "white" },
                  }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={dotRange}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  content={<CustomTooltip />}
                />
                <Scatter data={data01} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SalesTrendChart;
