import React from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data01 = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Books', value: 200 },
  { name: 'Fitness', value: 278 },
  { name: 'Home & Garden', value: 300 },
  { name: 'Others', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

// Assign specific colors for each data01 category
const COLORS = [
  '#f68ba2', // Electronics
  '#d2ccf2', // Clothing
  '#f5e29e', // Books
  '#b2eaD3', // Fitness
  '#BEB9E2', // Home & Garden
  '#83CCD2', // Others
];

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Category
      </h2>

      <div className="h-[22rem] sm:h-[26rem] md:h-[30rem]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Bottom pie chart*/}
            <Pie
              dataKey="value"
              data={data02}
              cx="70%"
              cy="20%"
              innerRadius="20%"
              outerRadius="35%"
              fill="#ade1ef"
            />

            {/* Top pie chart */}
            <Pie
              dataKey="value"
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius="50%"
              label={({ value }) => `${value}`}
            >
              {data01.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-white">
        {data01.map((entry, index) => (
          <div key={entry.name} className="flex items-center space-x-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SalesByCategoryChart;
