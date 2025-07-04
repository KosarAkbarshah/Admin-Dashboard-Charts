// import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import React, { useState } from "react";

// prettier-ignore
const userData = [
  { id: 1, name: "Liam Carter", email: "liam.carter@example.com", role: "Editor", status: "Active" },
  { id: 2, name: "Maya Rivera", email: "maya.rivera@example.com", role: "Admin", status: "Inactive" },
  { id: 3, name: "Ethan Kim", email: "ethan.kim@example.com", role: "Subscriber", status: "Pending" },
  { id: 4, name: "Sophia Zhang", email: "sophia.zhang@example.com", role: "Customer", status: "Active" },
  { id: 5, name: "Noah Patel", email: "noah.patel@example.com", role: "Moderator", status: "Suspended" },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };
  return (
    // prettier-ignore
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
            <div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100 mx-4'>Users</h2>
				   <div className="relative w-full max-w-xs md:max-w-sm">
						<input
						type="text"
						placeholder="search products..."
						className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
						onChange={handleSearch}
						value={searchTerm}
						 />
				  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
				</div>
				
			</div>

            <div className="overflow-x-auto ">
                <table className="min-w-full divide-y divide-gray-700">
<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Role
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>
                    <tbody className="divide-y divide-gray-700">
                        {filteredUsers.map((user) => (
                            <motion.tr key={user.id}
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.3}}>
                        <td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
										</div>
									</div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-300'>{user.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{user.role}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
									<button className='text-red-400 hover:text-red-300'>Delete</button>
								</td>
                            </motion.tr>
                        )
                    
                    )}
                    </tbody>
                </table>
            </div>
        </motion.div>
  );
};

export default UsersTable;
