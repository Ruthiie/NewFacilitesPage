// Updated page.tsx with all required imports fixed

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import InviteFacilityModal from "@/components/modals/InviteFacilityModal";
import FilterModal from "@/components/modals/FilterModal";
import "@fontsource/lexend";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

// Reusable Status Badge Component
function StatusBadge({ text, bgColor, textColor, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-[13px] font-medium ${bgColor} ${textColor} ${className}`}
      style={{ width: 150, paddingTop: 6, paddingBottom: 6, textAlign: "center" }}
    >
      {text}
    </span>
  );
}

export default function FacilitiesPage() {
  const [openInvite, setOpenInvite] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#f4f5f7] p-8 font-[Lexend]"
      style={{ fontFamily: "Lexend, sans-serif" }}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-[#1b1b1b]">Facilities</h1>
        <Button
          className="bg-[#1581E4] hover:bg-[#1581E4]/90 text-white font-light rounded-md px-5"
          onClick={() => setOpenInvite(true)}
        >
          + Invite Facility
        </Button>
      </div>

      <hr className="border-t-4 border-[#DADADA] mt-2 mb-6" />

      <Card className="rounded-md border border-gray-200 shadow-sm bg-white p-6">
        <div className="flex items-center justify-end space-x-3 mb-4">
          <Input
            placeholder="Select facility"
            className="max-w-[220px] border border-gray-300 rounded-md"
          />
          <Input
            placeholder="Select onboarding date range"
            className="max-w-[250px] border border-gray-300 rounded-md"
          />
          <Button
            className="bg-[#1581E4] hover:bg-[#1581E4]/90 text-white font-light rounded-md px-6 py-2"
            onClick={() => setOpenFilter(true)}
          >
            Filter
          </Button>
        </div>

        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full border-collapse">
            <colgroup>
              <col />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
              <col className="w-[8%]" />
            </colgroup>

            <thead>
              <tr className="bg-[#00A0EE] text-[13px] text-black">
                <th className="py-3 px-4 font-semibold text-left">Facilities</th>
                <th className="py-3 px-6 font-semibold text-center">Payment Type</th>
                <th className="py-3 px-6 font-semibold text-center">Onboarded Date</th>
                <th className="py-3 px-6 font-semibold text-center">Reminder Sent on</th>
                <th className="py-3 px-6 font-semibold text-center">Status</th>
                <th className="py-3 px-6 font-semibold text-center">Details &amp; Remark</th>
                <th className="py-3 px-6 font-semibold text-center">Action</th>
              </tr>
            </thead>

            <tbody className="text-[14px] text-[#4b4b4b] align-middle">
              {/* Row 1 */}
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left">Huis Nuweland</td>
                <td className="py-3 px-6 text-center">Direct via Wise</td>
                <td className="py-3 px-6 text-center">14/05/2027</td>
                <td className="py-3 px-6 text-center"></td>
                <td className="py-3 px-6 text-center">
                  <StatusBadge text="Pending Signature" bgColor="bg-[#CDE4EE]" textColor="text-[#000]" />
                </td>
                <td className="py-3 px-6 text-center">
                  <Button
                    variant="outline"
                    className="border border-gray-300 text-[13px] font-normal rounded-md px-4 py-[5px] hover:bg-gray-50"
                  >
                    Details
                  </Button>
                </td>
                <td className="py-3 px-6 text-center">
                  <Button variant="outline" className="rounded-md p-1 border border-gray-300 hover:bg-gray-50">
                    <MoreHorizontal size={18} />
                  </Button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 flex items-center gap-2 text-left">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                  Ons Huis
                </td>
                <td className="py-3 px-6 text-center">Via Badisa</td>
                <td className="py-3 px-6 text-center">14/05/2027</td>
                <td className="py-3 px-6 text-center">20/05/2027</td>
                <td className="py-3 px-6 text-center">
                  <StatusBadge text="Deactivated" bgColor="bg-[#E3424F]" textColor="text-white" />
                </td>
                <td className="py-3 px-6 text-center">
                  <Button
                    variant="outline"
                    className="border border-gray-300 text-[13px] font-normal rounded-md px-4 py-[5px] hover:bg-gray-50"
                  >
                    Details
                  </Button>
                </td>
                <td className="py-3 px-6 text-center">
                  <Button variant="outline" className="rounded-md p-1 border border-gray-300 hover:bg-gray-50">
                    <MoreHorizontal size={18} />
                  </Button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left">Huis Ravenzicht</td>
                <td className="py-3 px-6 text-center">Direct via Wise</td>
                <td className="py-3 px-6 text-center">20/05/2027</td>
                <td className="py-3 px-6 text-center"></td>
                <td className="py-3 px-6 text-center">
                  <StatusBadge text="Pending Doc Check" bgColor="bg-[#D38C00]" textColor="text-white" />
                </td>
                <td className="py-3 px-6 text-center">
                  <Button
                    variant="outline"
                    className="border border-gray-300 text-[13px] font-normal rounded-md px-4 py-[5px] hover:bg-gray-50"
                  >
                    Details
                  </Button>
                </td>
                <td className="py-3 px-6 text-center">
                  <Button variant="outline" className="rounded-md p-1 border border-gray-300 hover:bg-gray-50">
                    <MoreHorizontal size={18} />
                  </Button>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 text-left">Huis De Kuilen</td>
                <td className="py-3 px-6 text-center">Direct via Wise</td>
                <td className="py-3 px-6 text-center">18/05/2027</td>
                <td className="py-3 px-6 text-center">20/05/2027</td>
                <td className="py-3 px-6 text-center">
                  <StatusBadge text="Onboarded" bgColor="bg-[#19A753]" textColor="text-white" />
                </td>
                <td className="py-3 px-6 text-center">
                  <Button
                    variant="outline"
                    className="border border-gray-300 text-[13px] font-normal rounded-md px-4 py-[5px] hover:bg-gray-50"
                  >
                    Details
                  </Button>
                </td>
                <td className="py-3 px-6 text-center">
                  <Button variant="outline" className="rounded-md p-1 border border-gray-300 hover:bg-gray-50">
                    <MoreHorizontal size={18} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Invite Modal */}
      <InviteFacilityModal isOpen={openInvite} onClose={() => setOpenInvite(false)} />

      {/* Filter Modal */}
      <FilterModal isOpen={openFilter} onClose={() => setOpenFilter(false)} />
    </div>
  );
}
