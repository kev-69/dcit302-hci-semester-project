import React, { useState } from "react";
import { X, CreditCard } from "lucide-react";

interface CreditCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (cardData: CardData) => void;
}

interface CardData {
  cardNumber: string;
  expiry: string;
  cvc: string;
  cardholderName: string;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [cardData, setCardData] = useState<CardData>({
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardholderName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
      if (formattedValue.length > 19) return; // Limit to 16 digits + 3 spaces
    }

    // Format expiry as MM/YY
    if (name === "expiry") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
      if (formattedValue.length > 5) return; // Limit to MM/YY
    }

    // Limit CVC to 3 digits
    if (name === "cvc") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 3) return;
    }

    setCardData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleConfirm = () => {
    // Basic validation
    if (
      !cardData.cardNumber ||
      !cardData.expiry ||
      !cardData.cvc ||
      !cardData.cardholderName
    ) {
      alert("Please fill in all card details");
      return;
    }

    if (cardData.cardNumber.replace(/\s/g, "").length !== 16) {
      alert("Please enter a valid 16-digit card number");
      return;
    }

    if (cardData.expiry.length !== 5) {
      alert("Please enter a valid expiry date (MM/YY)");
      return;
    }

    if (cardData.cvc.length !== 3) {
      alert("Please enter a valid 3-digit CVC");
      return;
    }

    onConfirm(cardData);
    setCardData({
      cardNumber: "",
      expiry: "",
      cvc: "",
      cardholderName: "",
    });
    onClose();
  };

  const handleClose = () => {
    setCardData({
      cardNumber: "",
      expiry: "",
      cvc: "",
      cardholderName: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CreditCard className="text-orange-500" size={24} />
            <h2 className="text-xl font-julius font-semibold">Card Payment</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardholderName"
              value={cardData.cardholderName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiry"
                value={cardData.expiry}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input
                type="text"
                name="cvc"
                value={cardData.cvc}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="123"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCardModal;