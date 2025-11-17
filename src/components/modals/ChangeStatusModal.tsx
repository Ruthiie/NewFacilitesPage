import React from "react";
import { X } from "lucide-react";

interface ChangeStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangeStatusModal: React.FC<ChangeStatusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm font-[Lexend]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-semibold text-gray-900">Change Status</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>
        <div className="border-b border-gray-200 mb-5" />

        {/* Content */}
        <form className="space-y-4 text-sm">
          {/* Facility & Programme Code */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-0.5">
                Facility
              </label>
              <p className="text-gray-800 text-sm font-medium">Huis Nuweland</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-0.5">
                Programme Code
              </label>
              <p className="text-gray-800 text-sm font-medium">BTH07</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-0.5">
              Email ID
            </label>
            <p className="text-gray-800 text-sm font-medium">
              huisnuweland@gmail.com
            </p>
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full border border-gray-300 rounded-md h-9 px-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="pending">Pending Signature</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>

          {/* Remark */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Remark
            </label>
            <textarea
              placeholder="Type your message here"
              className="w-full border border-gray-300 rounded-md h-24 p-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              200 to 500 characters
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="confirm"
              className="mt-0.5 border-gray-400 rounded"
            />
            <label
              htmlFor="confirm"
              className="text-xs text-gray-600 leading-snug"
            >
              I am aware of my action and understand that this is an irreversible
              process.
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 text-gray-700 rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5 py-2 text-sm font-medium transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeStatusModal;
