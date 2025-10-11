import React from "react";
import { X, Truck, Calendar, DollarSign } from "lucide-react";

interface PaymentOnDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: string;
}

const PaymentOnDeliveryModal: React.FC<PaymentOnDeliveryModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  amount,
}) => {
  if (!isOpen) return null;

  // Calculate delivery date (3-5 business days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4); // 4 days from now
  const formattedDate = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Truck className="text-orange-500" size={24} />
            <h2 className="text-xl font-julius font-semibold">Payment on Delivery</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-center py-4">
          <div className="bg-orange-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 mb-4">
              You have selected <strong>Payment on Delivery</strong>. Your order will be delivered and you'll be required to pay upon delivery.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="text-orange-500" size={20} />
                <span className="font-semibold">Amount to pay: {amount}</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Calendar className="text-orange-500" size={20} />
                <span className="text-sm">Expected delivery: {formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> Please ensure you have the exact amount ready for payment. Our delivery agent will collect the payment upon delivery.
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p>• Cash payment only</p>
            <p>• Have exact change ready</p>
            <p>• Payment required before item handover</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOnDeliveryModal;