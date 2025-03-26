import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Sell Your Book", path: "/admin/dashboard" },
    { name: "Blog", path: "/blog" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-slate-100  py-6 px-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <Link to="/" className="text-xl md:text-2xl font-bold text-black">
            Books <span className="text-blue-500">Shop</span>
          </Link>
        </div>
        {/* nav item */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-blue-500 mx-4" :
              "text-black mx-4"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <button className="text-sm bg-blue-500 text-white cursor-pointer rounded-md px-8 py-2">
            Sing In
          </button>
        </div>
        {/* toggle icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center"
          >
            {menuOpen ? (
              <IoCloseSharp className="block w-6 h-6 text-black"></IoCloseSharp>
            ) : (
              <RxHamburgerMenu className="block w-6 h-6 text-black"></RxHamburgerMenu>
            )}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden top-16 px-2 py-7 bg-slate-100 text-black ">
          <nav className="flex flex-col items-start mt-4 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-black mb-2 hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col items-start mt-5">
            <button className="text-xl bg-blue-500 text-white font-normal cursor-pointer rounded-md px-10 py-2">
              Sing In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
