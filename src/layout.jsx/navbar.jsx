import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchContext } from '../searchprovider';
import Navmenu from '../pages.jsx/navmenu';

const Navbar = () => {
  const { search, setsearch } = useContext(searchContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className='w-full h-16 bg-black text-white fixed top-0 z-20'>
        <div className='flex items-center w-full h-full'>
          
          {/* Left: Desktop Menu */}
          <div className='flex items-center ml-5 h-full w-1/3'>
            <ul className='hidden md:flex gap-10'>
              <Link to="/aboutpage"><li>About</li></Link>
              <Link to="/products"><li>Shop</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>

            {/* button for mobile */}
            <button onClick={toggleMenu} className='flex items-center ml-5 md:hidden'>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Center: Logo */}
          <div className='flex items-center justify-center h-full w-1/3'>
            <Link to="/" >
              <h1 className='text-2xl'>D.Mitra</h1>
            </Link>
          </div>

          {/* Right: Search / Login / Cart */}
          <div className='flex items-center justify-end mr-5 h-full w-1/3'>
            <ul className='flex gap-10'>
              <li className='hidden md:flex items-center'>
                <input
                  placeholder='search here'
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                  className='border-b border-white bg-black text-white px-2'
                />
                <i className="fa-solid fa-magnifying-glass ml-2"></i>
              </li>
              <Link to="/login"><li className='hidden md:flex'>Login</li></Link>
              <Link to="/mycart"><li><i className="fa-solid fa-cart-shopping"></i></li></Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slide-in Navmenu */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full  bg-black text-white shadow-xl z-30
          transform transition-transform duration-500 ease-in-out
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <Navmenu toggleMenu={toggleMenu} />
      </div>

      {/* Overlay to close menu */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-0 left-0 w-full h-full bg-black/40 z-20"
        ></div>
      )}
    </>
  );
};

export default Navbar;
