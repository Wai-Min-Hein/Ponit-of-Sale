import { Button, Pagination, Table,Tabs,Text } from '@mantine/core'
import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineEdit,AiOutlineArrowRight,AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../../styles/userlist.css';
const ProductOverview = () => {
  const [search,setSearch] = useState('')
  const [open,setOpen] = useState(false)
  
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
          
        </div>
      </div>
      
      <div className='grid gap-48'>
      <Table className='text-white opacity-80 border border-border'>
        <thead>
          <tr className=''>
            <th>NO</th>
            <th>NAME</th>
            <th>BRAND</th>
            <th>UNIT</th>
            <th>SALE PRICE</th>
            <th>TOTAL STOCK</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td>1</td>
            <td className=' uppercase'>water Melon</td>
            <td className=' capitalize'>Melon</td>
            <td>5</td>
            <td>1,000</td>
            <td>100</td>
            <td className='flex gap-3 justify-end'>
              <Button onClick={()=>setOpen(!open)} className='!px-0 hover:bg-bg'>
              <AiOutlinePlus className='w-8 h-8 bg-border opacity-60 text-white rounded-full p-2'/>
              </Button>
              <Link to={'/edit'}>
              <AiOutlineEdit className='w-8 h-8 bg-border opacity-60 text-white rounded-full p-2'/>
              </Link>
              <Link to={'/view_user'}  className=''>
              <AiOutlineArrowRight className='w-8 h-8 bg-border opacity-60 text-white rounded-full p-2'/>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Pagination total={3} position='right'
       styles={(theme) => ({
        control: {
          color: '#fff',
          gap: 0,
          border: '1px solid #3f4245',
          ':hover':{
            backgroundColor:'#787f80 !important ',
          },
          '&[data-active]': {
            backgroundColor: "#D9D9D91A",
            border: 0,
            color: "#000"
          },
        },
      })}/>
      </div>
      
     <div onClick={()=>setOpen(false)} className={ open ? 'h-full w-full bg-bg-dark opacity-60 fixed top-0 right-0 transition block' : 'hidden'}></div>
     <div className={open ? 'h-full w-1/4 bg-bg fixed top-0 right-0 p-6' : 'transition right-[-50px]'}>
      <h1 className='text-white text-2xl text-center mb-6'>Add Stock</h1>
      <div className='mb-6'>
        <label htmlFor="quantity" className='text-lg'>Quantity</label>
        <input type="text" className='border border-border p-2 rounded bg-bg'/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="more" className='text-lg'>more</label>
        <input type="text" className='border border-border p-2 rounded bg-bg'/>
      </div>
     </div>
      
    
    </div>
    </section>
  )
}

export default ProductOverview