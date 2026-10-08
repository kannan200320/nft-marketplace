import React from 'react';

export const NFT_IMAGE = "https://i.pinimg.com/736x/45/59/ff/4559ff2bc6ca5f0fdc8a6c0fb4996d99.jpg";
export const PROFILE_IMAGE = "https://i.pinimg.com/736x/98/f7/df/98f7df4eae5753a93141de70f2a07027.jpg";
export const PAPAYA_AVATAR = "https://i.pinimg.com/736x/98/f7/df/98f7df4eae5753a93141de70f2a07027.jpg";
export const JOHN_ABRAHAM_AVATAR = "https://i.pinimg.com/736x/98/f7/df/98f7df4eae5753a93141de70f2a07027.jpg";
export const BRIGHTEN_IMAGE = "https://i.pinimg.com/1200x/d2/09/43/d20943baa99349071308d8eb824e22fa.jpg";
export const RECENT_OFFER_AVATAR = "https://i.pinimg.com/736x/98/f7/df/98f7df4eae5753a93141de70f2a07027.jpg";

export const INITIAL_NFTS = [
  { id: 1, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Artwork" },
  { id: 2, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Book" },
  { id: 3, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Artwork" },
  { id: 4, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Book" },
  { id: 5, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Artwork" },
  { id: 6, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Book" },
  { id: 7, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Artwork" },
  { id: 8, name: "Liquid Wave", image: NFT_IMAGE, time: "3h 1m 50s", bid: "0.05 ETH", price: "0.15 ETH", category: "Book" },
];

export const INITIAL_ACTIVE_BIDS = [
  { name: "Cute Cube Cool", image: NFT_IMAGE, owner: "John Abraham" },
  { name: "Liquid Wave", image: NFT_IMAGE, owner: "John Abraham" },
  { name: "Cute Cube Cool", image: NFT_IMAGE, owner: "John Abraham" },
  { name: "Liquid Wave", image: NFT_IMAGE, owner: "John Abraham" },
  { name: "Liquid Wave", image: NFT_IMAGE, owner: "John Abraham" },
];

export const INITIAL_NOTIFICATIONS = [
  { id: 1, text: "Your bid on Liquid Wave was outbid by 0.06 ETH", time: "5m ago" },
  { id: 2, text: "John Abraham started following you", time: "1h ago" },
  { id: 3, text: "New NFT Collection 'Cute Cube' dropped!", time: "2h ago" },
];

export const ConstantsPlaceholder = () => <div style={{ display: 'none' }} />;
export default ConstantsPlaceholder;
