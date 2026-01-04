// import React, { useContext } from 'react'
// import CartContext from '../store/CartContext';
// import UserProgressContext from '../store/UserProgressContext';
import logo from '../../assets/logo.jpg'

function Header() {
//       const cartCtx = useContext(CartContext);
//       const userProgressCtx = useContext(UserProgressContext);
      
//       const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
//         return totalNumberOfItems + item.quantity;
//         }, 0);

//   function handleShowCart() {
//     userProgressCtx.showCart();
//   }
  return (
    <header className="flex justify-between items-center px-[10%] py-8 bg-[#1d1a16]">
    <div  className="flex items-center gap-4">
        <img src={logo} className="w-16 h-16 rounded-full border-2 border-[#ffc404] object-cover" alt='meal logo'/>
        <h1 className="text-2xl font-bold uppercase tracking-wider text-[#ffc404]">ReactFood </h1>


        
    </div>
    <nav>
        <button 
        //   onClick={handleShowCart}
          className="text-[#ffc404] font-semibold text-lg bg-transparent border-none cursor-pointer hover:text-[#ffab04] transition-colors duration-200"
        >
          {/* Cart ({totalCartItems}) */}
          Cart
        </button>
      </nav>
    </header>
  )
}

export default Header