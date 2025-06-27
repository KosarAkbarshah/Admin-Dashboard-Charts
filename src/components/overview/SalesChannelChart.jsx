// prettier-ignore
import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import { Treemap, ResponsiveContainer } from "recharts";
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 68200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
  { name: "Other", value: 13390 },
];

class CustomizedContent extends PureComponent {
  render() {
    const { x, y, width, height, index, depth, name, value, colors } =
      this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: colors[index % colors.length],
            stroke: "#fff",
            strokeWidth: 2,
          }}
        />
        <text
          x={x + width / 2}
          y={y + height / 2 - 5}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
        >
          {name}
        </text>
        <text
          x={x + width / 2}
          y={y + height / 2 + 15}
          textAnchor="middle"
          fill="#ccc"
          fontSize={12}
        >
          {value.toLocaleString()}
        </text>
      </g>
    );
  }
}
const SalesChannelChart = () => {
  return (
    <motion.div
      className=" col-span-1 lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={SALES_CHANNEL_DATA}
            dataKey="value"
            // stroke="#F2F0EF"
            fill="#8884d8"
            content={<CustomizedContent colors={COLORS} />}
          />
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
