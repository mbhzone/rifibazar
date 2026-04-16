import React from 'react';
import { Outlet } from 'react-router';
import BG from '../../assets/BG.png';

const Root = () => {
  return (
    <div
      className="min-h-screen bg-top relative "
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'repeat',
        // backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      {/* 👇 overlay layer */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* content layer 👇 */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
