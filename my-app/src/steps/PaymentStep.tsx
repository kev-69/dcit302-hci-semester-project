import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import MobileMoneyModal from "../modals/MobileMoneyModal";
import CreditCardModal from "../modals/CreditCardModal";
import PaymentOnDeliveryModal from "../modals/PaymentOnDeliveryModal";

const PaymentStep: React.FC<{ onBack: () => void; onOrderComplete: () => void }> = ({ onBack, onOrderComplete }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const paymentOptions = [
    { id: "momo", label: "Payment Via Momo", icon: "📱" },
    { id: "card", label: "Payment With Credit Card", icon: "💳" },
    { id: "delivery", label: "Payment On Delivery", icon: "🚚" },
  ];

  const handlePaymentSelection = (paymentType: string) => {
    setActiveModal(paymentType);
  };

  const handleMobileMoneyProceed = (provider: string) => {
    console.log("Selected mobile money provider:", provider);
    // Handle mobile money payment logic here
    setTimeout(() => {
      onOrderComplete(); // Complete the order after simulated payment processing
    }, 1000);
  };

  const handleCreditCardConfirm = (cardData: any) => {
    console.log("Card data:", cardData);
    // Handle credit card payment logic here
    setTimeout(() => {
      onOrderComplete(); // Complete the order after simulated payment processing
    }, 1000);
  };

  const handleDeliveryConfirm = () => {
    console.log("Payment on delivery confirmed");
    // Handle payment on delivery logic here
    setTimeout(() => {
      onOrderComplete(); // Complete the order after confirmation
    }, 500);
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-xl p-4 mt-6">
        <p className="text-xl font-semibold mb-4">Payment Method</p>
        <p className="text-sm text-gray-600 mb-4">Choose how you'd like to pay for your order</p>
        
        <div className="space-y-3">
          {paymentOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handlePaymentSelection(option.id)}
              className="w-full border rounded-lg py-3 px-4 font-medium hover:bg-gray-50 hover:border-orange-300 transition flex items-center gap-3"
            >
              <span className="text-xl">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        <p className="text-orange-500 text-sm mt-3">Select an installment plan</p>
        <p
          onClick={onBack}
          className="text-orange-500 text-right mt-3 text-sm cursor-pointer hover:text-orange-600"
        >
          Back To Shipping
        </p>
      </div>

      <OrderSummary />

      {/* Payment Modals */}
      <MobileMoneyModal
        isOpen={activeModal === "momo"}
        onClose={() => setActiveModal(null)}
        onProceed={handleMobileMoneyProceed}
      />

      <CreditCardModal
        isOpen={activeModal === "card"}
        onClose={() => setActiveModal(null)}
        onConfirm={handleCreditCardConfirm}
      />

      <PaymentOnDeliveryModal
        isOpen={activeModal === "delivery"}
        onClose={() => setActiveModal(null)}
        onConfirm={handleDeliveryConfirm}
        amount="GHS 1,485.00"
      />
    </div>
  );
};

export default PaymentStep;
