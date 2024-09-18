import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-neutral-100 text-red-600 py-4 px-8 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Smart Emergency Response System</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-red-300">Home</Link>
        <Link to="/donate" className="hover:text-red-300">Donate</Link>
      </div>
    </nav>
  );
};

export default Navbar;
