import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Demographic data: age groups with gender counts
const data = [
  { name: "18-24", male: 1200, female: 1300, other: 200 },
  { name: "25-34", male: 1500, female: 1600, other: 180 },
  { name: "35-44", male: 1100, female: 1250, other: 150 },
  { name: "45-54", male: 800, female: 950, other: 100 },
  { name: "55+", male: 600, female: 700, other: 90 },
];

export default class UserDemographicsChart extends PureComponent {
  render() {
    return (
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          User Demographics
        </h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="male"
                stackId="1"
                stroke="#6366F1"
                fill="#6366F1"
              />
              <Area
                type="monotone"
                dataKey="female"
                stackId="1"
                stroke="#10B981"
                fill="#10B981"
              />
              <Area
                type="monotone"
                dataKey="other"
                stackId="1"
                stroke="#F59E0B"
                fill="#F59E0B"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    );
  }
}
