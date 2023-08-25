import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineWindow,MdList} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import '../../../styles/userlist.css';
import StockGrid from './StockGrid'
import StockList from './StockList'
const Stock = () => {
  const [search,setSearch] = useState('')
  const nav = useNavigate()
  const [view, setView] = useState("grid");

  const handleBan = ()=>{
    nav('/ban_user')
  }
  const viewHandler = (views) => {
    if (views == "grid") {
      setView("grid");
      //   console.log("grid");
    } else {
      setView("list");
      //   console.log("list");
    }}
  return (
    <section className='bg-bg min-h-screen w-full p-6'>
    <div className=' mx-auto grid gap-5'>
      <div className="flex justify-between items-center py-3">
          <div>
          <h1 className='text-xl text-white mb-2'>Products</h1>
          <span className='text-gray-50'>Inventory / Products</span>
          </div>
          <div className='flex gap-5'>
          <Link to={'/shop'}>
          <button className='bg-bg  border-border flex items-center gap-2 text-primary px-4 py-1 border rounded-md transition hover:text-white'>
                <span>Go to Shop</span>
              </button>
          </Link>
          <Link to={'/addproduct'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
                <AiOutlinePlus/>
                <span>Add Product</span>
              </button>
          </Link>
          </div>
 
      </div>
      
      <div className="flex justify-between items-end py-3">
        <div className=''>
          <h1 className='text-xl text-white mb-3'>Staff Overview</h1>
          <div className='border flex border-border rounded-xl p-2'>
            <AiOutlineSearch className='text-white text-2xl me-2'/>
            <input type="text" value={search} placeholder='Search' onChange={e=>setSearch(e.target.value)} className='bg-bg focus:outline-none text-white' />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-50'>
            Sort: {" "}
            <select name="sort" id="sort" className='bg-bg font-light text-white focus:outline-none'>
              <option value="Last">Last</option>
            </select>
          </span>
          <span className='text-gray-50'>
            Filter: {" "}
            <select name="filter" id="filter" className='bg-bg font-light text-white focus:outline-none'>
              <option value="filter" >All File</option>
            </select>
          </span>
          <div className="flex text-border text-xl">
          <button
            onClick={() => viewHandler("list")}
            className={`${
              view == "list" && "text-primary"
            } border border-primary p-1 rounded-s`}
          >
            <MdList />
          </button>
          <button
            onClick={() => viewHandler("grid")}
            className={`${
              view == "grid" && "text-primary"
            } border border-primary p-1 rounded-e`}
          >
            <MdOutlineWindow />
          </button>
          </div>
        </div>
      </div>
      
      {view == "grid" ? <StockGrid/>: <StockList/>}
    
    </div>
    </section>
  )
}

export default Stock