import React from "react";
import { CheckCircle, Calendar, MapPin, CreditCard, Package } from "lucide-react";

interface OrderConfirmationProps {
  orderNumber: string;
  orderDate: string;
  deliveryDate: string;
  deliveryAddress: string;
  paymentMethod: string;
  totalAmount: string;
  onContinueShopping: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderNumber,
  orderDate,
  deliveryDate,
  deliveryAddress,
  paymentMethod,
  totalAmount,
  onContinueShopping,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-500" size={64} />
          </div>
          <h1 className="text-3xl font-julius font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-julius font-semibold text-gray-800 mb-4">
            Order Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Package className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-semibold">{orderNumber}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-semibold">{orderDate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <CreditCard className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Payment Method</p>
                  <p className="font-semibold">{paymentMethod}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Delivery Address</p>
                  <p className="font-semibold">{deliveryAddress}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-500" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Expected Delivery</p>
                  <p className="font-semibold">{deliveryDate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">₵</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-semibold text-lg">{totalAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-julius font-semibold text-gray-800 mb-4">Items Ordered</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm"><span className="text-orange-500">①</span> Nasco Multipurpose Blender</span>
              <span className="text-sm font-medium">GHS 450.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm"><span className="text-orange-500">①</span> Hisence Industrial Freezer</span>
              <span className="text-sm font-medium">GHS 950.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm"><span className="text-orange-500">①</span> Akai Microwave</span>
              <span className="text-sm font-medium">GHS 250.00</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-julius font-semibold text-blue-800 mb-2">What happens next?</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• You'll receive an email confirmation shortly</li>
            <li>• We'll send you tracking information once your order ships</li>
            <li>• Your items will be delivered by {deliveryDate}</li>
            <li>• Contact us if you have any questions about your order</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onContinueShopping}
            className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Continue Shopping
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Track Order
          </button>
        </div>

        {/* Support Contact */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help? Contact us at{" "}
            <span className="text-orange-500 font-medium">support@jumia.com</span>{" "}
            or <span className="text-orange-500 font-medium">+233 123 456 789</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;