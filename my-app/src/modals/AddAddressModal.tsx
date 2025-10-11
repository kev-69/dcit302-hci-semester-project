import React, { useState } from "react";
import { X } from "lucide-react";

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: AddressData) => void;
}

interface AddressData {
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

const AddAddressModal: React.FC<AddAddressModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<AddressData>({
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Basic validation
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill in all fields");
      return;
    }
    
    onSave(formData);
    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
    });
    onClose();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-julius font-semibold">Add New Address</h2>
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
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="123 Main Street"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Accra"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State/Region
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Greater Accra"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="00233"
            />
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
            onClick={handleSave}
            className="flex-1 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600"
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal;