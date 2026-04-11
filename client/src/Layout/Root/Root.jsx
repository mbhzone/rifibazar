import React from 'react';
import { Outlet } from 'react-router';
import BG from '../../assets/BG.png';

const Root = () => {
  return (
    <div
      className="min-h-screen bg-top"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'repeat',
        // backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <Outlet />
    </div>
  );
};

export default Root;
