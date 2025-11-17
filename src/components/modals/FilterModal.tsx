"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  return (
    <Popover open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <PopoverTrigger asChild>
        <Button className="bg-[#1289a9] hover:bg-[#1289a9]/90 text-white !rounded-md px-6 py-2 font-[Lexend]">
          Filter
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="right"
        align="start"
        sideOffset={4}
        className="w-[180px] p-4 bg-white border border-gray-200 rounded-md shadow-md font-[Lexend]"
      >
        <div className="space-y-4 text-gray-700">
          {/* Facility Status Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Facility</h4>
            <div className="border-b border-gray-200 my-1" />
            <div className="space-y-1 mt-2">
              {[
                "All",
                "Pending Document Check",
                "Deactivated",
                "Onboarding in Progress",
                "Late Payment",
              ].map((status) => (
                <label key={status} className="flex items-center gap-2">
                  <Checkbox id={status.toLowerCase().replace(/\s+/g, "-")} />
                  <span className="text-sm text-gray-700">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Type Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Payment Type</h4>
            <div className="border-b border-gray-200 my-1" />
            <div className="space-y-1 mt-2">
              {["Direct via Wise", "Via Badisa"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <Checkbox id={type.toLowerCase().replace(/\s+/g, "-")} />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end pt-1">
            <Button className="bg-[#01889f] hover:bg-[#017A8F] text-white h-7 px-4 text-xs rounded-sm font-[Lexend]">
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
