import React, { useContext } from "react";
import { formattedPrice } from "../../util/formatting";
import Button from "../../components/UI/Button";
import  {CartContext} from "../../store/CartContext"
function MealItem({ meal }) {
  const cartCtx = useContext(CartContext)
  function addToCartHandler(){
    cartCtx.addItem({
      id: meal.id,
      title: meal.name,
      price: Number(meal.price),
      description: meal.description,
    });
  }
  // console.log("Cart Context:", cartCtx);

  const price= formattedPrice.format(Number(meal.price).toFixed(2))

  return (
    <div
      className="w-96 rounded-2xl overflow-hidden shadow-xl border border-neutral-800"
      style={{ backgroundColor: "#1d1b16" }}
    >
  
      <div className="h-56 overflow-hidden">
        <img
        src={(() => {
          // meal.image is already "images/mac-and-cheese.jpg"
          // Check if we're running locally (development) vs production
          const isProduction = process.env.NODE_ENV === 'production' || 
                               (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app'));
          
          if (isProduction) {
            // Production (Vercel): Use direct static file path
            // React build copies frontend/public/images/ to build/images/
            // So /images/mac-and-cheese.jpg will work
            return `/${meal.image}`;
          } else {
            // Local development: Use backend server
            const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
            return `${baseUrl}/${meal.image}`;
          }
        })()}
        alt={meal.name}
          className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Image failed to load:', e.target.src);
          // Fallback: try direct path if API path failed
          if (e.target.src.includes('localhost:3001') || e.target.src.includes('/api/')) {
            e.target.src = `/${meal.image}`;
          }
        }}
        />
      </div>

   
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          {meal.name}
        </h2>

   
        <div
          className="inline-block mb-4 px-6 py-1 rounded-lg text-yellow-400 font-semibold text-lg"
          style={{ backgroundColor: "#322c1d" }}
        >
          {price}
        </div>

       
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {meal.description}
        </p>

     
        <Button
        textOnly onClick={addToCartHandler}
          // className="w-1/2 py-3 rounded-lg font-semibold text-black transition"
          // style={{ backgroundColor: "#ffc304" }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default MealItem;
