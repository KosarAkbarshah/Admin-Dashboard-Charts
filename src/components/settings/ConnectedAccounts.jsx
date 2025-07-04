import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";
import { motion } from "framer-motion";

const ConnectedAccounts = () => {

    const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		
	]);
  return (
    <SettingSection icon={HelpCircle} title="Connected Accounts">
      {connectedAccounts.map((account)=>(
        <div key={account.id} className="flex items-center justify-between py-3 ">
            <div className="flex gap-1 ">
			<span><img src={account.icon} alt="social image" className="size-6 object-cover rounded-full mr-2 " /></span>
			<span className="text-gray-300">{account.name}</span>
            </div>
		<button
		// /when clicked updates the state 
						className={`px-3 py-1 rounded ${
							account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
						onClick={() => {
							setConnectedAccounts(
								connectedAccounts.map((acc) => {
									if (acc.id === account.id) {
										return {
											...acc,
											connected: !acc.connected,
										};
									}
									return acc;
								})
							);
						}}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
        </div>
		
      ))}
	  	<button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
    </SettingSection>
  )
}

export default ConnectedAccounts
