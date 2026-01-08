
import { useState, useContext } from 'react';
import './App.css';
import CartContextProvider, { CartContext } from './store/CartContext';
import Meals from './componentss/Meals/Meals';
import Cart from './componentss/Cart/Cart';
import Checkout from './componentss/Checkout/Checkout';
import Modal from './components/UI/Modal';
import Header from './componentss/Header/Header';

function AppContent() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleOpenModel = () => setIsOpenModel(true);
  const handleCloseModel = () => setIsOpenModel(false);
  const handleOpenCheckout = () => {
    setIsOpenModel(false);
    setIsCheckoutOpen(true);
  };
  const handleCloseCheckout = () => setIsCheckoutOpen(false);

  return (
    <>
      <div className="p-4  bg-[#040302]">
        <Header  onOpenCart={handleOpenModel} />
       

        <Meals />

        {/* Cart Modal */}
        <Modal isOpen={isOpenModel} onClose={handleCloseModel} className="max-w-3xl">
          <Cart onClose={handleCloseModel} onCheckout={handleOpenCheckout} />
        </Modal>

        {/* Checkout Modal */}
        <Checkout checkoutOpen={isCheckoutOpen} cartData={cartCtx.items} onClose={handleCloseCheckout} />
      </div>
    </>
  );
}

function App() {
  return (
    <CartContextProvider>
      <AppContent />
    </CartContextProvider>
  );
}

export default App;
