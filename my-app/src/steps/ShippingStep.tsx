import React, { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import AddAddressModal from "../modals/AddAddressModal";

interface AddressData {
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

const ShippingStep: React.FC<{ onNext: () => void; onBack: () => void }> = ({
  onNext,
  onBack,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState<AddressData[]>([
    {
      name: "Bismark Obuobi",
      street: "123 Lazybird Drive",
      city: "Legon",
      state: "Greater Accra",
      postalCode: "00233",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(0);

  const handleAddAddress = (newAddress: AddressData) => {
    setAddresses([...addresses, newAddress]);
    setSelectedAddress(addresses.length); // Select the new address
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-xl p-4 mt-6">
        <p className="text-xl font-semibold mb-3">Shipping Info</p>
        <p className="text-sm mb-2">Select a shipping address</p>

        {addresses.map((address, index) => (
          <div
            key={index}
            className={`border rounded-lg p-3 mb-2 ${
              selectedAddress === index ? "bg-orange-100" : "bg-gray-50"
            }`}
          >
            <label className="flex items-start gap-2">
              <input
                type="radio"
                checked={selectedAddress === index}
                onChange={() => setSelectedAddress(index)}
                className="mt-1 accent-orange-500"
              />
              <div>
                <p className="font-medium text-gray-800">{address.name}</p>
                <p className="text-sm text-gray-600">
                  {address.street}<br />
                  {address.city}, {address.state} {address.postalCode}
                </p>
              </div>
            </label>
          </div>
        ))}

        <button
          onClick={() => setIsModalOpen(true)}
          className="text-orange-500 text-sm mb-3 hover:text-orange-600"
        >
          + Add a new address
        </button>

        <button
          onClick={onNext}
          className="w-full bg-orange-500 text-white py-2 rounded-md font-bold"
        >
          <h2>PROCEED TO PAYMENT</h2>
        </button>
        <p
          onClick={onBack}
          className="text-orange-500 text-right mt-2 text-sm cursor-pointer"
        >
          Back To Review
        </p>
      </div>

      <OrderSummary step="shipping" />
      
      <AddAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAddress}
      />
    </div>
  );
};

export default ShippingStep;
