import React from "react";

interface OrderSummaryProps {
  step?: "review" | "shipping" | "payment";
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ step = "review" }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-6">
      <h2 className="text-2xl font-light mb-3">ORDER SUMMARY</h2>
      <ul className="space-y-1 text-sm">
        <li className="flex justify-between">
          <span><span className="text-orange-500">①</span> Nasco Multipurpose Blender</span>
          <span>GHS 450.00</span>
        </li>
        <li className="flex justify-between">
          <span><span className="text-orange-500">①</span> Hisence Industrial Freezer</span>
          <span>GHS 950.00</span>
        </li>
        <li className="flex justify-between">
          <span><span className="text-orange-500">①</span> Akai Microwave</span>
          <span>GHS 250.00</span>
        </li>
      </ul>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value="WELCOME10"
          className="border rounded-md px-2 py-1 w-[400px] text-sm bg-gray-100"
          readOnly
        />
        <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
          APPLIED!
        </button>
      </div>

      <div className="mt-4 text-sm space-y-1">
        <div className="flex justify-between">
          <span>{step === "shipping" ? "Shipping" : "Subtotal"}</span>
          <span>{step === "shipping" ? "Free" : "GHS 1,650.00"}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount (WELCOME10)</span>
          <span>-GHS 165.00</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>GHS 1,485.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
