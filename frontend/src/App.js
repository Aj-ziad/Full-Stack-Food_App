
import { useState } from 'react';
import './App.css';



import CartContextProvider from './store/CartContext';

import Meals from './componentss/Meals/Meals';
import Cart from './componentss/Cart/Cart';
import Header from './componentss/Header/Header';

import Modal from "./components/UI/Modal" 
function App() {
  const [isOpenModel,setIsOpenModel] = useState(false)
  const handleOpenModel =() => setIsOpenModel(true)
  const handleCloseModel = () => setIsOpenModel(false)
  return (
   <>

  <CartContextProvider>
      <div className="min-h-screen bg-[#0f0f0f]">
    
        <Header  onOpenCart={handleOpenModel} />
        
        <Meals />

        {/* Modal */}
        <Modal isOpen={isOpenModel} onClose={handleCloseModel} className="max-w-3xl">
          <Cart onClose={handleCloseModel}/>
        </Modal>
      </div>
    </CartContextProvider>
   

   </>
  );
}

export default App;
