import React from "react";
import { motion } from "framer-motion";
import StatCart from "../components/common/StatCart";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import Header from "../components/common/Header";
import ProductTable from "../components/Products/ProductTable";
import SalesTrendChart from "../components/Products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import CategoryRadialBarChart from "../components/Products/CategoryRadialBarChart ";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* //reusable component : **HEADER**  */}
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCart
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366f1"
          />
          <StatCart
            name="Total Sellings"
            icon={TrendingUp}
            value={86}
            color="#10b981"
          />
          <StatCart
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#f59e0b"
          />
          <StatCart
            name="Total Revenue"
            icon={DollarSign}
            value={"$412,345"}
            color="#ef4444"
          />
        </motion.div>

        {/* Product Table  */}
        <ProductTable />

        {/* CHARTS  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          {/* <CategoryDistributionChart /> */}
          <CategoryRadialBarChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
