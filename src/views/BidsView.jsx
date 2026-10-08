import React, { useState, useEffect } from 'react';
import { StatCard } from '../components/StatCard';
import { UserAvatar } from '../components/UserAvatar';
import { ChevronRight, X } from '../components/Icons';
import { 
  INITIAL_ACTIVE_BIDS, 
  RECENT_OFFER_AVATAR 
} from '../components/Constants.jsx';

export const ActiveBidsTable = () => {
  const [items, setItems] = useState(INITIAL_ACTIVE_BIDS);
  const [selected, setSelected] = useState({});

  const handleDelete = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const toggleSelect = (index) => {
    setSelected(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[760px]">
        <div className="grid grid-cols-[40px_1.5fr_1fr_1fr_1.2fr_1.2fr_40px] items-center border-b border-white/10 px-2 py-3 text-xs font-semibold text-gray-300">
          <span>□</span>
          <span>Item List</span>
          <span>Open Price</span>
          <span>Your Offer</span>
          <span>Recent Offer</span>
          <span>Time Left</span>
          <span>Action</span>
        </div>

        <div className="space-y-2 pt-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_1.5fr_1fr_1fr_1.2fr_1.2fr_40px] items-center rounded-lg bg-dark-100 px-2 py-3 text-xs"
            >
              <button
                onClick={() => toggleSelect(index)}
                className="text-left text-gray-400 hover:text-white cursor-pointer select-none"
              >
                {selected[index] ? "■" : "□"}
              </button>
              <div className="flex items-center gap-2.5">
                <img
                  src={item.image}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-[11px] text-gray-400">{item.owner}</p>
                </div>
              </div>
              <span className="text-gray-300 font-medium">0.0025 ETH</span>
              <span className="text-gray-300 font-medium">0.0025 ETH</span>
              <div className="flex items-center gap-2">
                <UserAvatar src={RECENT_OFFER_AVATAR} size="h-7 w-7" />
                <span className="text-gray-300 font-medium">0.0025 ETH</span>
              </div>
              <span className="text-gray-300 font-medium">2 Hours 1 min 30s</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-gray-400 transition hover:text-red-500 cursor-pointer"
                title="Remove bid"
              >
                <X size={14} />
              </button>
            </div>
          ))}

          {items.length === 0 && (
            <p className="py-6 text-center text-sm text-gray-400">
              No active bids remaining.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const BidsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && bidAmount) {
      setSuccessMsg(`Successfully placed ${bidAmount} ETH bid on "${itemName}"!`);
      setIsModalOpen(false);
      setItemName("");
      setBidAmount("");
      setTimeout(() => setSuccessMsg(""), 3500);
    }
  };

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Bids</h1>
          <p className="page-subtitle">Welcome Bids Page</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <span>Home</span>
          <ChevronRight size={13} className="text-gray-500" />
          <span className="font-medium text-purple-400">Bids</span>
        </div>
      </div>

      {successMsg && (
        <div className="rounded-lg bg-blue-500/20 px-4 py-2.5 text-xs text-blue-400 border border-blue-500/30">
          {successMsg}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard value="24K" subtitle="Artworks" color="purple" />
        <StatCard value="82K" subtitle="Auction" color="green" />
        <StatCard value="200" subtitle="Creators" color="yellow" />
        <StatCard value="89" subtitle="Canceled" color="red" />
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-white">Active Bids</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="primary-button cursor-pointer"
            style={{ color: '#ffffff' }}
          >
            Place a Bid
          </button>
        </div>
        <div className="dashboard-card p-2 sm:p-4">
          <ActiveBidsTable />
        </div>
      </section>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overscroll-contain"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-sm rounded-xl bg-dark-100 p-5 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="text-sm font-semibold text-white">Place New Bid</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="mb-1 block text-gray-300">Item Name</label>
                <input
                  className="input"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="e.g. Liquid Wave"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-gray-300">Bid Amount (ETH)</label>
                <input
                  className="input"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="0.05 ETH"
                  required
                />
              </div>
              <button
                type="submit"
                className="primary-button w-full mt-2 cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                Confirm Bid
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
