import { useDispatch } from "react-redux"
import { addToReceive } from "../Services/Slice/cashierSlice"

const CashierProduct = ({product}) => {

    const dispatch = useDispatch()

    


    

    
  
  return (
    <div onClick={() => (  
        dispatch(addToReceive({...product, quantity:1}))
    )} className="basis-[23.5%] rounded-md overflow-hidden cursor-pointer border-2 border-gray-50">
        <div className="w-full h-[10rem] ">
            <img src={product?.photo} className="block w-full h-full object-cover" alt="" />
        </div>
        <div className="px-6 py-4 text-right">

        <h4>{product?.name}</h4>
        <p>{product?.sale_price
} ks</p>
        </div>
    </div>
  )
}

export default CashierProduct
