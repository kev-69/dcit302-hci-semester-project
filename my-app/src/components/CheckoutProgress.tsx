import React from "react";
import { Check } from "lucide-react";

interface CheckoutProgressProps {
  currentStep: number;
}

const CheckoutProgress: React.FC<CheckoutProgressProps> = ({ currentStep }) => {
  const steps = ["Review", "Shipping", "Payment"];
  return (
    <div className="text-center py-4">
      <h1 className="text-5xl font-light mb-4">CHECKOUT</h1>
      <div className="flex justify-center gap-8">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full border-2 ${
                  isCompleted
                    ? "bg-orange-500 border-orange-500 text-white"
                    : isActive
                    ? "bg-white border-orange-500 text-orange-500"
                    : "bg-white border-black text-black"
                }`}
              >
                {isCompleted ? (
                  <span className="text-2xl text-white"><Check /></span>
                ) : (
                  <span className="text-2xl">
                    {stepNumber}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  isActive ? "text-orange-500 font-medium" : ""
                }`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProgress;