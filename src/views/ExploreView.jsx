import React, { useState, useEffect } from 'react';
import { useNavigate } from '../router/Router';
import { NftCard } from '../components/NftCard';
import { StatCard } from '../components/StatCard';
import { UserAvatar } from '../components/UserAvatar';
import { X } from '../components/Icons';
import { 
  BRIGHTEN_IMAGE, 
  PAPAYA_AVATAR, 
  JOHN_ABRAHAM_AVATAR,
  INITIAL_NFTS 
} from '../components/Constants.jsx';

export const ExploreView = ({ searchQuery = '' }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [isBirghtenBidPlaced, setIsBirghtenBidPlaced] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [followingStates, setFollowingStates] = useState({});

  useEffect(() => {
    if (isCreateModalOpen || isDetailsModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCreateModalOpen, isDetailsModalOpen]);

  const toggleFollow = (id) => {
    setFollowingStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredNfts = (activeTab === "All" ? INITIAL_NFTS : INITIAL_NFTS.filter(item => item.category === activeTab)).filter(nft => 
    !searchQuery || nft.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="hero-banner relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a0626] via-[#24083d] to-[#10052b] p-6 text-white">
          <div className="relative z-10 max-w-sm">
            <h1 className="text-xl font-bold leading-tight !text-white" style={{ color: '#ffffff' }}>
              Discover, Collect, Sell<br />and Create your NFT
            </h1>
            <p className="mt-3 text-xs text-purple-200" style={{ color: '#e9d5ff' }}>
              Digital marketplace for crypto collectibles and non-fungible tokens.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => navigate("/collections")}
                className="rounded-md bg-purple-500 px-5 py-2 text-xs font-medium !text-white transition hover:bg-purple-600 cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                Explore
              </button>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="rounded-md bg-red-500 px-5 py-2 text-xs font-medium !text-white transition hover:bg-red-600 cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                Create
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/40 blur-3xl pointer-events-none" />
        </div>

        <div className="dashboard-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <img
            src={BRIGHTEN_IMAGE}
            alt="Birghten LQ"
            className="h-36 w-full rounded-2xl object-cover sm:h-44 sm:w-44 shrink-0"
          />
          <div className="flex flex-1 flex-col justify-between space-y-3 py-1 sm:space-y-2">
            <div className="flex items-center gap-2.5">
              <UserAvatar src={JOHN_ABRAHAM_AVATAR} size="h-8 w-8" />
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-white">John Abraham</p>
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold text-white sm:text-lg">Birghten LQ</h2>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="text-gray-300">Auction time</p>
                <p className="mt-1 font-medium text-gray-400">3h 1m 50s</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300">
                  Current Bid : <span className="font-semibold text-purple-400">0.05 ETH</span>
                </p>
                <p className="mt-1 font-medium text-gray-400">0.15 ETH</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => {
                  setIsBirghtenBidPlaced(true);
                  setTimeout(() => setIsBirghtenBidPlaced(false), 2500);
                }}
                className={`rounded-xl px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 shadow-md cursor-pointer ${
                  isBirghtenBidPlaced ? "bg-blue-600" : "bg-primary hover:bg-purple-600"
                }`}
                style={{ color: '#ffffff' }}
              >
                {isBirghtenBidPlaced ? "Bid Placed!" : "Place a Bid"}
              </button>
              <button
                onClick={() => setIsDetailsModalOpen(true)}
                className="rounded-xl bg-red-500 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-red-600 shadow-md cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Trending Bids</h2>
          <div className="flex gap-4 text-[10px]">
            {["All", "Artwork", "Book"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-3 py-1 transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-primary text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
                style={activeTab === tab ? { color: '#ffffff' } : undefined}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredNfts.map((nft) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div>
          <h2 className="mb-3 text-base font-semibold text-white">Trending Bids</h2>
          <div className="space-y-3">
            <StatCard value="24K" subtitle="Artworks" color="purple" />
            <StatCard value="89" subtitle="Auction" color="red" />
            <StatCard value="82K" subtitle="Creators" color="green" />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-base font-semibold text-white">ETH Price</h2>
          <div className="dashboard-card flex h-64 items-center p-4">
            <svg viewBox="0 0 350 200" className="h-full w-full">
              <defs>
                <linearGradient id="ethAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7047EB" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7047EB" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {[
                { label: "350", y: 22 },
                { label: "300", y: 44 },
                { label: "250", y: 66 },
                { label: "200", y: 88 },
                { label: "150", y: 110 },
                { label: "100", y: 132 },
                { label: "50", y: 154 },
                { label: "0", y: 176 },
              ].map(({ label, y }) => (
                <text
                  key={label}
                  x="24"
                  y={y}
                  fill="#9CA3AF"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="sans-serif"
                  textAnchor="end"
                >
                  {label}
                </text>
              ))}
              <path
                d="M 50 176 L 85 130 L 120 136 L 155 110 L 190 117 L 225 88 L 260 123 L 295 136 L 330 123 L 330 176 L 50 176 Z"
                fill="url(#ethAreaGrad)"
              />
              <path
                d="M 50 176 L 85 130 L 120 136 L 155 110 L 190 117 L 225 88 L 260 123 L 295 136 L 330 123"
                fill="none"
                stroke="#7047EB"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[
                [50, 176],
                [85, 130],
                [120, 136],
                [155, 110],
                [190, 117],
                [225, 88],
                [260, 123],
                [295, 136],
                [330, 123],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4.5" fill="#7047EB" />
              ))}
            </svg>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-base font-semibold text-white">Statistics</h2>
          <div className="dashboard-card flex h-64 flex-col items-center justify-center p-4">
            <svg viewBox="0 0 200 150" className="h-44 w-44">
              <path
                d="M 100 15 A 60 60 0 0 1 100 135 L 100 112 A 37 37 0 0 0 100 38 Z"
                fill="#7047EB"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              <path
                d="M 100 135 A 60 60 0 0 1 100 15 L 100 38 A 37 37 0 0 0 100 112 Z"
                fill="#1D1931"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
            </svg>
            <div className="mt-3 flex items-center justify-center gap-6 text-xs font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-primary inline-block shrink-0" />
                <span>Artwork Sold</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-white/90 inline-block shrink-0" />
                <span>Artwork CanCel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Recent Activity</h2>
          <div className="dashboard-card overflow-hidden">
            {[
              "Purchase by you for 0.05 ETH",
              "0.06ETH Received",
              "Started Following you",
              "Has been sold by 12.75ETH",
              "Purchase by you for 0.05 ETH",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b border-white/5 px-4 py-3 last:border-none"
              >
                <div className="flex items-center gap-3">
                  <UserAvatar src={PAPAYA_AVATAR} size="h-7 w-7" />
                  <div>
                    <p className="text-[10px] font-medium text-white">Papaya</p>
                    <p className="text-[8px] text-gray-400">{text}</p>
                  </div>
                </div>
                <span className="text-[8px] text-gray-500">12 mins ago</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Top Creators</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((creatorId) => (
              <div
                key={creatorId}
                className="dashboard-card flex items-center justify-between p-3"
              >
                <div className="flex items-center gap-3">
                  <UserAvatar src={PAPAYA_AVATAR} />
                  <div>
                    <p className="text-[10px] font-semibold text-white">Papaya</p>
                    <p className="text-[8px] text-gray-400">60 Items</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleFollow(creatorId)}
                  className={`px-3 py-1 text-[8px] rounded-md transition cursor-pointer ${
                    followingStates[creatorId]
                      ? "bg-blue-600 text-white"
                      : "secondary-button"
                  }`}
                  style={followingStates[creatorId] ? { color: '#ffffff' } : undefined}
                >
                  {followingStates[creatorId] ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isCreateModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overscroll-contain"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <div 
            className="w-full max-w-sm rounded-xl bg-dark-100 p-5 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="text-sm font-semibold text-white">Create New NFT</h3>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="mb-1 block text-gray-300">NFT Name</label>
                <input className="input" placeholder="e.g. Cosmic Wave #1" />
              </div>
              <div>
                <label className="mb-1 block text-gray-300">Price (ETH)</label>
                <input className="input" placeholder="0.15 ETH" />
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="primary-button w-full mt-2 cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                Upload & Create NFT
              </button>
            </div>
          </div>
        </div>
      )}

      {isDetailsModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overscroll-contain"
          onClick={() => setIsDetailsModalOpen(false)}
        >
          <div 
            className="w-full max-w-sm rounded-xl bg-dark-100 p-5 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <h3 className="text-sm font-semibold text-white">Auction Details: Birghten LQ</h3>
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-2 text-xs text-gray-300">
              <p>
                <strong className="text-white">Creator:</strong> John Abraham
              </p>
              <p>
                <strong className="text-white">Auction Ends:</strong> 3h 1m 50s
              </p>
              <p>
                <strong className="text-white">Current Highest Bid:</strong> 0.05 ETH
              </p>
              <p>
                <strong className="text-white">Reserve Price:</strong> 0.15 ETH
              </p>
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="primary-button w-full mt-4 cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
