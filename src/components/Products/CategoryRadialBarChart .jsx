import React from "react";
import { motion } from "framer-motion";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const categoryData = [
  { name: "Electronics", value: 4500, fill: "#6366F1" },
  { name: "Clothing", value: 3200, fill: "#8B5CF6" },
  { name: "Home & Garden", value: 2800, fill: "#EC4899" },
  { name: "Books", value: 2100, fill: "#10B981" },
  { name: "Sports & Outdoors", value: 1900, fill: "#F59E0B" },
];

const legendStyle = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
  color: "white",
};

const CategoryRadialBarChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 max-h-[32rem] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Category Distribution
      </h2>
      <div className="h-[18rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-[24rem]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={categoryData}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff", fontSize: 12 }}
              background
              clockWise
              dataKey="value"
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={10}
              wrapperStyle={{ paddingTop: "10px", color: "white" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryRadialBarChart;
