import React, { useState } from "react";
import { X } from "lucide-react";

interface MobileMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: (provider: string) => void;
}

const MobileMoneyModal: React.FC<MobileMoneyModalProps> = ({
  isOpen,
  onClose,
  onProceed,
}) => {
  const [selectedProvider, setSelectedProvider] = useState("");

  const providers = [
    { id: "mtn", name: "MTN Mobile Money", logo: "📲" },
    { id: "airteltigo", name: "AirtelTigo Money", logo: "📲" },
    { id: "telecel", name: "Telecel Cash", logo: "📲" },
  ];

  const handleProceed = () => {
    if (!selectedProvider) {
      alert("Please select a mobile money provider");
      return;
    }
    onProceed(selectedProvider);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-julius font-semibold">Mobile Money Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Select your mobile money provider to continue with payment
        </p>

        <div className="space-y-3">
          {providers.map((provider) => (
            <label
              key={provider.id}
              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
                selectedProvider === provider.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input
                type="radio"
                name="provider"
                value={provider.id}
                checked={selectedProvider === provider.id}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="accent-orange-500"
              />
              <span className="text-2xl">{provider.logo}</span>
              <span className="font-medium">{provider.name}</span>
            </label>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleProceed}
            className="flex-1 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMoneyModal;