import React from 'react';
import { NftCard } from '../components/NftCard';
import { INITIAL_NFTS } from '../components/Constants.jsx';

export const SavedView = ({ searchQuery = '' }) => {
  const filteredNfts = INITIAL_NFTS.filter(nft => 
    !searchQuery || nft.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="page-title">Saved Items</h1>
        <p className="page-subtitle">Welcome Saved Page</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredNfts.map((nft) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};
