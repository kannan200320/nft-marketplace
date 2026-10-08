import React, { useState } from 'react';
import { NftCard } from '../components/NftCard';
import { INITIAL_NFTS } from '../components/Constants.jsx';

export const CollectionsView = ({ searchQuery = '' }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Artwork", "Book"];

  const filtered = (activeCategory === "All" ? INITIAL_NFTS : INITIAL_NFTS.filter(d => d.category === activeCategory)).filter(nft =>
    !searchQuery || nft.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-5">
        <h1 className="page-title">Collections</h1>
        <p className="page-subtitle">Welcome Collection Page</p>
      </div>

      <div className="mb-5 flex gap-4 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1 transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-white font-medium"
                : "text-gray-400 hover:text-white"
            }`}
            style={activeCategory === cat ? { color: '#ffffff' } : undefined}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((nft) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};
