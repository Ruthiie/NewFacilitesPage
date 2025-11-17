import React from "react";
import { X } from "lucide-react";

interface InviteFacilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteFacilityModal: React.FC<InviteFacilityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Invite Facility</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
              <input
                type="text"
                placeholder="Enter Organization Name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facility Email</label>
              <input
                type="email"
                placeholder="E.g. abc@mybadisa.com"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facility Name</label>
              <input
                type="text"
                placeholder="Enter Facility Name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Programme Code</label>
              <input
                type="text"
                placeholder="Programme Code"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Manager in Charge</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Type</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Payment Type</option>
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
                <option value="once-off">Once Off</option>
              </select>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Onboarding</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nature of Business</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Nature of Business</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="logistics">Logistics</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2 text-sm"
            >
              Send Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InviteFacilityModal;
