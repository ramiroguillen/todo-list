import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-slate-300 p-3 items-center justify-end gap-3">
      <Link to="/" className="bg-white py-1 px-3">List</Link>
      <Link to="/create" className="bg-white py-1 px-3">Create new task</Link>
    </div>
  );
};

export default Navbar;
