import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const CartItem = ({ product }) => {
  const [count, setCount] = useState(0);
  const [deleteItem,setDeleteItem] = useState(false)

  function countValue(e) {
    setCount(e.target.value);
  }


  function handledelete(e) {
    setDeleteItem(!deleteItem)
  }




  const { price, title, image } = product;
  return (
    <div className="pt-6 ">
      <div className="flex  justify-evenly items-center gap-10">
        <h1>Products</h1>
        <h1>Quality</h1>
        <h2>Total</h2>
      </div>
      <hr className="w-full h-[2px] mt-2 bg-gray-600"/>
     <div className={deleteItem ? "hidden" : ""}>
     <div className="flex justify-evenly items-center gap-2 p-3  pt-10">
        <div className="flex flex-col justify-evenly gap-3 items-center" >
          <img src={image} className="w-14 h-14 rounded-lg" alt="product-img" />
          <h1 className="text-sm">{title}</h1>
          <p> Price : ${price}</p>
        </div>
          <div className="cursor-pointer flex justify-center gap-3 items-center  ">
            <FaMinus
              onClick={() => {
                setCount(count >= 1 ? count - 1 : count);
              }}
            />
            <input onChange={countValue} type="number" value={count<0 ? 0 : count } className=" text-center font-semibold w-9"/>
            <FaPlus
              onClick={() => {
                setCount( Number(count) + 1);
              }}
            />
          </div> 
          <p className="font-bold"> Price : ${Math.round( count * Number(price)) } </p>
          <FaXmark onClick={handledelete} className="cursor-pointer" />
      </div>
     </div>



    </div>
  );
};

export default CartItem;
