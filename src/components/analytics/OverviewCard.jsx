import React from 'react'
import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";


const overviewData = [
	{ name: "Revenue", value: "$3,254,567", change: 33.5, icon: DollarSign },
	{ name: "Users", value: "88,678", change: 6.3, icon: Users },
	{ name: "Orders", value: "2,876", change: -2.2, icon: ShoppingBag },
	{ name: "Page Views", value: "7,243,430", change: 10.7, icon: Eye },
];

const OverviewCard = () => {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 '>
      {overviewData.map((item,index) =>(

        <motion.div
        key={item.name}
        className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
        
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }} /// delay , each card appears as each index goes(each card appeears one after another)

        >
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
                    <p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-green-500" : "bg-red-500 "}`}>
                <item.icon 
                className={`size-6 ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
                />
                </div>
            </div>
            <div
            className={`mt-4 flex items-center ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
            >
           {item.change >= 0 ? <ArrowUpRight size='20' /> : <ArrowDownRight size='20' />}
              {/* /// Math.abs is used to make sure the number is positive  */}
           <span className='ml-1 text-sm font-medium'>{Math.abs(item.change)}</span>
           <span className='ml-2 text-sm text-gray-400'>vs last period</span>
            </div>

        </motion.div>

      ))}
    </div>
  )
}

export default OverviewCard
