import React from "react";
import OrderSummary from "../components/OrderSummary";
import { Trash2, Plus, Minus } from "lucide-react";
import blender from "../assets/blender.png";
import freezer from "../assets/freezer.png";
import microwave from "../assets/microwave.png";

const ReviewStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const items = [
    { name: "Nasco Multipurpose Blender", price: "450.00", image: blender },
    { name: "Hisence Industrial Freezer", price: "950.00", image: freezer },
    { name: "Akai Microwave", price: "250.00", image: microwave },
  ];

  return (
    <div>
      <div className="bg-white shadow-md rounded-xl p-4 mt-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center gap-3">
              <img 
                src={item.image}
                alt={item.name}
                className="w-14 h-14 bg-gray-100 rounded-md object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs">Electronics</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm font-medium">GHS {item.price}</p>
                  <div className="flex items-center gap-1">
                    <button className="border p-1 rounded-md hover:bg-gray-50">
                      <Minus size={12} />
                    </button>
                    <span className="text-xs px-1">1</span>
                    <button className="border p-1 rounded-md hover:bg-gray-50">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-red-500 hover:text-red-700 p-2">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={onNext}
          className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md font-bold"
        >
          <h2>PROCEED TO SHipping</h2>
        </button>
        <p className="text-orange-500 text-right mt-2 text-sm">Continue Shopping</p>
      </div>

      <OrderSummary />
    </div>
  );
};

export default ReviewStep;
