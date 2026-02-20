import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decquantity, incquantity, removefromcart } from "../slice/cartslice";
import { searchContext } from "../searchprovider";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartitem);
  const { search } = useContext(searchContext);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemname = cartItems.map((item)=>{item.name})
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col gap-6 justify-center items-center min-h-screen text-center px-4">
        <p className="text-xl text-gray-500 max-w-md">
          Your cart is empty! Start shopping and grab something amazing today!
        </p>
        <Link to="/products">
          <button className="border rounded-xl bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }

  return (<>
    <div className="flex flex-col lg:flex-row gap-8 pt-20 px-4 lg:px-20 min-h-screen">
      
      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded"
            />

            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <div className="flex items-center mt-1">
                <button
                  onClick={() => dispatch(decquantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                <button
                  onClick={() => dispatch(incquantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <p className="font-bold mt-2 text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => dispatch(removefromcart(item.id))}
              className="text-red-500 font-semibold hover:underline mt-2 sm:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 p-6 border rounded-lg shadow bg-white h-fit">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
         <div className="flex justify-between mb-2">
          <span>{itemname}</span>
          <span></span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span>${(subtotal + 10).toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
     <div className="flex justify-center mt-6">
        <Link to="/products">
          <button className="border rounded-xl bg-black text-white text-lg py-3 px-6 hover:bg-gray-800 transition">
            View More Products
          </button>
        </Link>
      </div>
 </> );
};

export default Cart;
