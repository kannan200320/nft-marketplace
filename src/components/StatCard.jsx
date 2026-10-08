import React from 'react';
import { FilePen } from './Icons';

export const StatCard = ({ title, value, subtitle, color = "purple" }) => {
  const colorMap = {
    purple: "bg-primary",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400"
  };

  return (
    <div className="dashboard-card flex items-center gap-4 p-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorMap[color] || "bg-primary"}`}>
        <FilePen size={18} className="text-white" style={{ color: '#ffffff' }} />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-base font-bold text-gray-900 dark:text-white">{value}</p>
          <span className="hidden text-xs font-medium text-green-500 sm:inline">+168.001%</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};
