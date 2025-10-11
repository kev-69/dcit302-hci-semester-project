import React, { useState } from "react";
import CheckoutProgress from "../components/CheckoutProgress";
import ReviewStep from "../steps/ReviewStep";
import ShippingStep from "../steps/ShippingStep";
import PaymentStep from "../steps/PaymentStep";
import CheckoutHeader from "../components/CheckoutHeader";
import OrderConfirmation from "../components/OrderConfirmation";

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Function to simulate order completion
  const handleOrderComplete = () => {
    setOrderCompleted(true);
  };

  // Function to restart shopping
  const handleContinueShopping = () => {
    setOrderCompleted(false);
    setStep(1); // Reset to first step
  };

  // If order is completed, show confirmation page
  if (orderCompleted) {
    return (
      <OrderConfirmation
        orderNumber="ORD-2025-001234"
        orderDate={new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        deliveryDate={new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        deliveryAddress="123 Lazybird Drive, Legon, Greater Accra 00233"
        paymentMethod="Mobile Money (MTN)"
        totalAmount="GHS 1,485.00"
        onContinueShopping={handleContinueShopping}
      />
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-10">
      <CheckoutHeader />
      <CheckoutProgress currentStep={step} />
      {step === 1 && <ReviewStep onNext={() => setStep(2)} />}
      {step === 2 && (
        <ShippingStep onNext={() => setStep(3)} onBack={() => setStep(1)} />
      )}
      {step === 3 && (
        <PaymentStep 
          onBack={() => setStep(2)} 
          onOrderComplete={handleOrderComplete}
        />
      )}
    </div>
  );
};

export default CheckoutPage;