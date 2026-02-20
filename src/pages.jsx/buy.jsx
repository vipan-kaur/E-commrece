// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { addToCart } from '../slice/cartslice'
// import { useDispatch, useSelector } from 'react-redux'

// const Buy = () => {
//     const{id}=useParams()
//     const productID =Number(id)
//       // const cartitem = useSelector((state)=> state.cart.cartitem)
//       // console.log("wertyu",cartitem)
//       const dispatch=useDispatch()
//     const[data,setData]=useState([null])
    

//     useEffect(()=>{
//         const products=async()=>{
//             try{
                
//                 const fetchapi = await fetch(`https://fakestoreapi.com/products/${productID}`);
//                 const apijson = await fetchapi.json()
//                 const result = apijson;
//                 setData(result);
//             }
//             catch(err){
//                 console.log(err)
//             }
//         }
//         products()
//     },[productID])
//     const handleAddToCart=(data)=>{
//       dispatch(addToCart(data))
//     }
//   return (
//         <>
//          <div className="grid grid-cols-2 gap-10 p-10">
//       <img
//         className="w-full object-contain"
//         src={data.image}
//         alt="product"
//       />

//       <div className="mt-5">
//         <p className="font-light">New</p>
//         <p className="text-xl font-semibold">
//           {data.title}
//         </p>

//         <br />

//         <p className="text-lg font-bold">₹{data.price}</p>
//         <p className="font-light">
//           (M.R.P inclusive of all taxes)
//         </p>

//         <br />

//         <p className="font-bold">Category</p>
//         <p>{data.category}</p>

//         <br />

//         <p className="font-bold">Description</p>
//         <p>{data.description}</p>
//        <button onClick={() => handleAddToCart(data)}  className='border rounded-2xl p-3 mt-3'>Add To Cart</button>
//       </div>
//         </div>
//         </>
//   )
// }

// export default Buy


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartslice";
import { Link } from "react-router-dom";

const Buy = () => {
  const { id } = useParams();
  const productID = Number(id);
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const[add,setadd]=useState(false)
   const[loading,setloading]=useState(true)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productID}`
        );
        const json = await res.json();
        setData(json);
        setloading(false)
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchProduct();
  }, [productID]);

  if (!data) {
    return <p className="text-center mt-10">Product not found</p>;
  }
  if(loading){return(
      <h1 className='min-h-screen text-center text-4xl font-bold'>Loading....</h1>
    )}

  return (<>
    <div className="grid grid-cols-2 gap-10 p-10">
      <img
        className="w-full object-contain"
        src={data.image}
        alt={data.title}
      />

      <div className="mt-5">
        <p className="font-light">New</p>
        <p className="text-xl font-semibold">{data.title}</p>

        <br />

        <p className="text-lg font-bold">₹{data.price}</p>
        <p className="font-light">(M.R.P inclusive of all taxes)</p>

        <br />

        <p className="font-bold">Category</p>
        <p>{data.category}</p>

        <br />

        <p className="font-bold">Description</p>
        <p>{data.description}</p>

        <button
          onClick={() =>{ dispatch(addToCart(data))
                           setadd(true)
          }}
          className="border rounded-xl bg-black text-white p-3 mt-4"
        >
          Add To Cart
        </button>
        <Link to="/products"><button className="border rounded-xl bg-black my-10 text-white p-3">View More Products</button></Link>
          {add&&(<div className="my-5">
            <p className="text-gray-400">{`Your ${data.title} is added to your cart`}</p>
            <Link to="/mycart"><button className="border rounded-xl bg-black my-8  text-white p-3">View Cart</button></Link>
          </div>)}
      </div>
    </div>
   
  </>);
};

export default Buy;
