import React from 'react'
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";


const monthlySalesData = [
	{ month: "Jan", sales: 7200 },
	{ month: "Feb", sales: 4500 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4300 },
	{ month: "May", sales: 5000 },
	{ month: "Jun", sales: 9000 },
	{ month: "Jul", sales: 7000 },
];

const SalesOverViewChart = () => {
        // initial value is this month 
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}>
            <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>
            <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'

            // grabs the evenet and updates the state with it //
             value={selectedTimeRange} onChange={(e) => setSelectedTimeRange(e.target.value)}>

                <option>This Week</option>
				<option>This Month</option>
				<option>This Quarter</option>
				<option>This Year</option>
            </select>
            </div>

            <div className='w-full h-80'>
            <ResponsiveContainer>
            <AreaChart data={monthlySalesData}>
            	<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#9966cc' fillOpacity={0.3} />
            </AreaChart>
            </ResponsiveContainer>
            </div>
      
    </motion.div>
  )
}

export default SalesOverViewChart
