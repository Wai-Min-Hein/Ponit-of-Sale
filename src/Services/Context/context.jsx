import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider =  ({children}) => {


    const [num, setNum] = useState('')
    const [onErase, setOnErase] = useState('')
    const [selectedDiv, setSelectedDiv] = useState('');

    

    const data = {num, setNum,selectedDiv, setSelectedDiv,onErase, setOnErase}
    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>  
    )
}

export default ContextProvider