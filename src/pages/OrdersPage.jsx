import React from 'react'
import Header from '../components/common/Header'
import { motion } from "framer-motion";
import StatCart from '../components/common/StatCart';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from '../components/orders/DailyOrders';
import OrdersDistribution from '../components/orders/OrdersDistribution';
import OrdersTable from '../components/orders/OrdersTable';


const orderStats = {
	totalOrders: "22,250",
	pendingOrders: "329",
	completedOrders: "5,378",
	totalRevenue: "$649,705",
};

const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
          <Header title="Orders" />
          <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
	<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCart name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
					<StatCart name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatCart
						name='Completed Orders'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981'
					/>
					<StatCart name='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
				</motion.div>


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <DailyOrders/>
                <OrdersDistribution/>
                </div>
                <OrdersTable/>

          </main>
    </div>
  )
}

export default OrdersPage
