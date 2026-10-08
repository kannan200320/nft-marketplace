import React from 'react';
import { PROFILE_IMAGE } from './Constants.jsx';

export const UserAvatar = ({ src = PROFILE_IMAGE, size = "w-9 h-9", className = "" }) => {
  return (
    <img
      src={src}
      alt="User"
      className={`${size} rounded-full object-cover border border-white/10 ${className}`.trim()}
    />
  );
};
