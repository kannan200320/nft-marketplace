import React, { useState } from 'react';
import { UserAvatar } from '../components/UserAvatar';
import { Check, Lock } from '../components/Icons';
import { PROFILE_IMAGE, PAPAYA_AVATAR, INITIAL_NFTS } from '../components/Constants.jsx';

export const ProfileView = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [is2FA, setIs2FA] = useState(false);
  const [followingStates, setFollowingStates] = useState({ 1: true, 2: true, 3: true, 4: true });

  const toggleFollow = (id) => {
    setFollowingStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Profile</h1>
        <p className="page-subtitle">Welcome Profile Page</p>
      </div>

      <section className="grid gap-5 lg:grid-cols-[250px_1fr]">
        <div className="dashboard-card p-5">
          <UserAvatar src={PROFILE_IMAGE} size="h-11 w-11" />
          <div className="mt-3 flex items-center gap-2">
            <h2 className="text-sm font-semibold text-white">John Smith</h2>
            {isVerified && (
              <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[8px] font-medium text-blue-400">
                Verified
              </span>
            )}
          </div>
          <p className="mt-1 text-[9px] leading-4 text-gray-400">
            {isVerified
              ? "Your account is verified and fully active."
              : "Looks like you are not verified yet. Verify yourself to use full potential."}
          </p>
          <div className="mt-5 border-t border-white/10 pt-4">
            <button
              onClick={() => setIsVerified(!isVerified)}
              className="flex items-center gap-2 text-[10px] text-primary transition hover:opacity-80 cursor-pointer"
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${isVerified ? "bg-blue-500" : "bg-red-600"}`}>
                <Check size={10} color="white" />
              </span>
              {isVerified ? "Account Verified" : "Verify account"}
            </button>
            <button
              onClick={() => setIs2FA(!is2FA)}
              className="mt-4 flex items-center gap-2 text-[10px] text-primary transition hover:opacity-80 cursor-pointer"
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${is2FA ? "bg-blue-500" : "bg-red-600"}`}>
                <Lock size={9} color="white" />
              </span>
              {is2FA ? "2FA Enabled" : "Two-factor Authentication (2FA)"}
            </button>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Following</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="dashboard-card flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <UserAvatar src={PAPAYA_AVATAR} />
                  <div>
                    <p className="text-[10px] font-semibold text-white">Papaya</p>
                    <p className="text-[8px] text-gray-400">60 Items</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleFollow(id)}
                  className={`rounded-md px-3 py-1 text-[8px] text-white transition cursor-pointer ${
                    followingStates[id] ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-purple-600"
                  }`}
                  style={{ color: '#ffffff' }}
                >
                  {followingStates[id] ? "Unfollow" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold text-white">My bought</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INITIAL_NFTS.slice(0, 4).map((nft) => (
            <div key={nft.id} className="dashboard-card overflow-hidden p-2.5">
              <div className="relative">
                <img src={nft.image} alt="" className="h-40 w-full rounded-xl object-cover" />
                <UserAvatar src={PAPAYA_AVATAR} size="h-8 w-8" className="absolute bottom-2 left-2" />
              </div>
              <p className="px-2 py-3 text-xs font-semibold text-white">Liquid Wave</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold text-white">My Collections</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INITIAL_NFTS.slice(0, 4).map((nft) => (
            <div key={nft.id} className="dashboard-card overflow-hidden p-2.5">
              <img src={nft.image} alt="" className="h-40 w-full rounded-xl object-cover" />
              <p className="px-2 py-3 text-xs font-semibold text-white">Liquid Wave</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
