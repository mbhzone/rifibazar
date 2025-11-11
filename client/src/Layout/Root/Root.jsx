import React from 'react';
import Navbar from '../../components/Navbar';

import { Outlet } from 'react-router';

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
