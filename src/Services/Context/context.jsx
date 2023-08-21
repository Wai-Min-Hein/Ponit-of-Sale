import { createContext, useState } from "react";
import {  useGetAllProductsQuery } from "../Api/productApi";

export const Context = createContext()

const ContextProvider =  ({children}) => {

  const token = localStorage.getItem('token')

    const [num, setNum] = useState('')
    const [onErase, setOnErase] = useState('')
    const [selectedDiv, setSelectedDiv] = useState('');

    const res =  useGetAllProductsQuery()

    console.log(res)

    const data = {num, setNum,selectedDiv, setSelectedDiv,onErase, setOnErase}
    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>  
    )
}

export default ContextProvider