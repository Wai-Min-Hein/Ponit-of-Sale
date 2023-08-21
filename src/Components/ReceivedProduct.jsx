import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Services/Context/context";
import { useDispatch } from "react-redux";
import { changeQtyByNum, eraseQty, removePdByQty } from "../Services/Slice/cashierSlice";

const ReceivedProduct = ({ product }) => {
  const { selectedDiv, setSelectedDiv } = useContext(Context);
  const isSelected = product?.id == selectedDiv;

  const dispatch = useDispatch();
  const { num,onErase } = useContext(Context);




  const localProducts = JSON.parse(localStorage.getItem("products"));

  const currentPds = localProducts.find((lPd) => lPd.id == product?.id);




  const toPayProduct = isSelected
    ? num
      ? { ...currentPds, quantity: Number(currentPds.quantity + num) }
      : currentPds
    : currentPds;

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  useEffect(() => {
    isSelected && dispatch(changeQtyByNum(toPayProduct));
    
  }, [num]);

  useEffect(() => {
    const erasedQty =  Math.floor((isSelected && currentPds?.quantity) /10)

    if( isSelected && currentPds.quantity ==0){

        dispatch(removePdByQty(toPayProduct)) 
    }


    isSelected && dispatch(eraseQty({...toPayProduct, quantity: erasedQty}))

 

   
    
  }, [onErase]) 

  return (
    <div
      onClick={() =>
        handleDivClick(product?.id)
        // , dispatch(changeQtyByNum(toPayProduct))
      }
      className={`flex items-center justify-between px-4 py-2 border-b border-gray-50 cursor-pointer ${
        isSelected ? "bg-primary" : ""
      }`}
    >
      <div className="">
        <h6>{product?.title}</h6>
        <p>{product?.quantity}</p>
      </div>
      <p>{product?.price * product?.quantity} ks</p>
    </div>
  );
};

export default ReceivedProduct;
