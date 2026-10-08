import React, { useState } from 'react';
import { User, Check } from '../components/Icons';

export const SettingsView = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [toastMsg, setToastMsg] = useState("");
  const tabs = ["Profile", "Application", "Security", "Activity", "Payment Method", "API"];

  const handleSave = (section) => {
    setToastMsg(`${section} saved successfully!`);
    setTimeout(() => setToastMsg(""), 2500);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="page-title">Setting</h1>
          <p className="page-subtitle">Welcome Setting Page</p>
        </div>
        {toastMsg && (
          <div className="flex items-center gap-1.5 rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs text-blue-400 border border-blue-500/30">
            <Check size={14} /> {toastMsg}
          </div>
        )}
      </div>

      <div className="mb-7 flex flex-wrap gap-5 border-b border-white/5 pb-3 text-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition cursor-pointer ${
              activeTab === tab
                ? "text-primary font-semibold border-b-2 border-primary pb-1"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">User profile</h2>
          <div className="dashboard-card p-4">
            <label className="mb-2 block text-[10px] text-gray-300">Full Name</label>
            <input className="input" defaultValue="John Smith" />
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white" style={{ color: '#ffffff' }}>
                <User size={16} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white">John Smith</p>
                <p className="text-[8px] text-gray-400">Welcome Setting Page</p>
              </div>
            </div>
            <button
              onClick={() => handleSave("User profile")}
              className="primary-button mt-4 cursor-pointer"
              style={{ color: '#ffffff' }}
            >
              Save
            </button>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">Update Profile</h2>
          <div className="dashboard-card p-4">
            <label className="mb-2 block text-[10px] text-gray-300">Email</label>
            <input className="input" type="email" defaultValue="john@example.com" />
            <label className="mb-2 mt-3 block text-[10px] text-gray-300">Password</label>
            <input className="input" type="password" defaultValue="password" />
            <button
              onClick={() => handleSave("Update profile")}
              className="primary-button mt-4 cursor-pointer"
              style={{ color: '#ffffff' }}
            >
              Save
            </button>
          </div>
        </section>
      </div>

      <section className="mt-7">
        <h2 className="mb-3 text-sm font-semibold text-white">Personal Information</h2>
        <div className="dashboard-card p-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((g) => (
              <div key={g}>
                <label className="mb-2 block text-[10px] text-gray-300">Info #{g}</label>
                <input className="input" placeholder={`Enter detail #${g}`} />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleSave("Personal information")}
            className="primary-button mt-4 cursor-pointer"
            style={{ color: '#ffffff' }}
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
};
