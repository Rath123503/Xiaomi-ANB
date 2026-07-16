import React from "react";
import { MaterialIcon } from "../common/MaterialIcon";

export const AllProductsCard = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-white border border-gray-100 rounded-lg p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all duration-300 cursor-pointer min-h-[180px]"
  >
    <span className="text-sm font-bold text-[#191919]">All Products</span>
    <span className="w-10 h-10 rounded-full border border-[#FF6900] text-[#FF6900] flex items-center justify-center">
      <MaterialIcon name="arrow_forward" size={18} />
    </span>
  </button>
);

export default AllProductsCard;