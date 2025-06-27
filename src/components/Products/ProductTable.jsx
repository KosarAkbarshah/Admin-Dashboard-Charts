import React from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash, Trash2 } from "lucide-react";
import { useState } from "react";
// prettier-ignore
const PRODUCT_DATA = [

  { id: 1, name: "Bluetooth Speaker", category: "Audio", price: 89.99, stock: 64, sales: 940 , image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MW443?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=a3lUcVlDNGVTQmNGSWJLSitWOEc1QWtuVHYzMERCZURia3c5SzJFOTlPakJhdnFhdktNQ1ZocVltL0ZlbGxwZzdQMlFqSlBkSVZaTlNRY3dUSTBDZlE"},
  { id: 2, name: "Sunglasses", category: "Fashion", price: 24.99, stock: 120, sales: 410 , image: "https://hakimoptical.ca/wp-content/uploads/2022/07/IMG_0191_1-scaled-1.jpg" },
  { id: 3, name: "Fitness Tracker", category: "Wearables", price: 139.99, stock: 38, sales: 780 , image: "https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/172/17257/17257418_4.jpg"},
  { id: 4, name: "Air Purifier", category: "Appliances", price: 159.99, stock: 72, sales: 530 , image: "https://pyxis.nymag.com/v1/imgs/3b7/795/55026eb741f6818a3dceb8a1c9ff893c21.jpg"},
  { id: 5, name: "Gaming Mouse", category: "Computers", price: 49.99, stock: 90, sales: 1150 , image: "https://i5.walmartimages.com/seo/TSV-Wireless-Gaming-Mouse-Rechargeable-USB-2-4G-Computer-7-Colorful-LED-Lights-3-Adjustable-DPI-Silent-Click-Ergonomic-Optical-Mice-PC-Laptop-Desktop_22167f75-b18e-4985-ad6d-9dc60c8e71f8.b28bf43baa20ccfc301730ef2db61c0a.jpeg"},
];
const ProductTable = () => {
  ///to search the words in ssearch bar
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  /// to make the search word into lowercase
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    ///you can search for both names and categories
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-xl font-semibold  text-gray-100 mx-4">Product List</h2>
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-300 ">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-300 ">
                  {product.price.toFixed(2)}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-300 ">
                  {product.stock}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-300 ">
                  {product.sales}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-300 ">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-5">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300 ">
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
