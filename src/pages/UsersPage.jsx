import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import StatCart from "../components/common/StatCart";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatMap from "../components/users/UserActivityHeatMap ";
import UserDemographicsChart from "../components/users/UserDemographicsChart ";

const userStats = {
  totalUsers: 882546,
  newUsersToday: 333,
  activeUsers: 96783,
  churnRate: "1.9%",
};
const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* //reusable component : **HEADER**  */}
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCart
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCart
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCart
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCart
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />

        {/* USER chart  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
