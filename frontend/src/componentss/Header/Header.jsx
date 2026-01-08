
// src/componentss/Header/Header.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../store/CartContext';
import logo from '../../assets/logo.jpg';

function Header({ onOpenCart }) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header className="flex justify-between items-center px-[10%] py-8 bg-[#040302]">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          className="w-16 h-16 rounded-full border-2 border-[#ffc404] object-cover"
          alt="meal logo"
        />
        <h1 className="text-2xl font-bold uppercase tracking-wider text-[#ffc404]">
          ReactFood
        </h1>
      </div>
      <nav>
        <button
          onClick={onOpenCart}
          className="text-[#ffc404] font-semibold text-lg bg-transparent border-none cursor-pointer hover:text-[#ffab04] transition-colors duration-200"
        >
          Cart ({totalCartItems})
        </button>
      </nav>
    </header>
  );
}

export default Header;