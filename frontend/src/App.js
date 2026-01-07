
import { useState } from 'react';
import './App.css';
import CartContextProvider from './store/CartContext';
import Meals from './componentss/Meals/Meals';
import Cart from './componentss/Cart/Cart';

function App() {
  const [isOpenModel,setIsOpenModel] = useState(false)
  const handleOpenModel =() => setIsOpenModel(true)
  const handleCloseModel = () => setIsOpenModel(false)
  return (
   <>

  <CartContextProvider>
      <div className="p-4">
        <h1 className="text-3xl text-red-600 font-bold mb-4">
          Hhhh The best team in the entire Bootcamp
        </h1>

        <button
          onClick={handleOpenModel}
          className="bg-yellow-400 px-4 py-2 rounded font-bold mb-4"
        >
          Open Cart
        </button>

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
