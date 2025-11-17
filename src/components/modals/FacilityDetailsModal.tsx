"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import "@fontsource/lexend";

interface FacilityDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // optional data - if you want to pass dynamic facility data
  facility?: {
    name?: string;
    programmeCode?: string;
    email?: string;
    dateOfInvitation?: string;
    status?: string;
    remark?: string;
    lastUpdate?: string;
    natureOfBusiness?: string;
  };
}

export default function FacilityDetailsModal({
  isOpen,
  onClose,
  facility,
}: FacilityDetailsModalProps) {
  // default/fallback values to match screenshot
  const data = {
    name: facility?.name ?? "Huis Nuweland",
    programmeCode: facility?.programmeCode ?? "PTH06a",
    email: facility?.email ?? "huisnuweland@gmail.com",
    dateOfInvitation: facility?.dateOfInvitation ?? "14/05/2025",
    status: facility?.status ?? "Suspended",
    remark:
      facility?.remark ??
      "Your account has been deactivated due to an overdue payment—please clear the dues to restore access.",
    lastUpdate: facility?.lastUpdate ?? "20/05/2027",
    natureOfBusiness: facility?.natureOfBusiness ?? "Elderly Care Facilities",
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Lexend, sans-serif" }}>
              Details
            </h3>
            <div className="mt-3 border-b border-gray-200" />
          </div>

          <DialogClose asChild>
            <button
              aria-label="Close"
              className="text-gray-600 hover:text-gray-800 p-1 rounded-full"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        {/* Content rows */}
        <div className="mt-5 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
          <div>
            <p className="text-xs font-medium text-gray-600">Nature Of Business</p>
            <p className="mt-1 text-sm text-gray-800">{data.natureOfBusiness}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-600">Programmed Code</p>
            <p className="mt-1 text-sm text-gray-800">{data.programmeCode}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-600">Date Of Invitation</p>
            <p className="mt-1 text-sm text-gray-800">{data.dateOfInvitation}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-600">Status</p>
            <p className="mt-1 text-sm text-red-500">{data.status}</p>
          </div>

          <div className="col-span-2">
            <p className="text-xs font-medium text-gray-600">Email ID</p>
            <p className="mt-1 text-sm text-gray-800">{data.email}</p>
          </div>
        </div>

        {/* Remark box */}
        <div className="mt-4">
          <p className="text-xs font-medium text-gray-600 mb-2">Remark</p>
          <div className="rounded-md border border-gray-200 p-3 bg-white">
            <p className="text-sm text-gray-700 leading-relaxed">{data.remark}</p>
          </div>

          <p className="mt-2 text-xs text-gray-400 text-right">
            Last Update {data.lastUpdate}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
