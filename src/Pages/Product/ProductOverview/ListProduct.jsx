import { Button, Pagination, Table } from '@mantine/core'
import { AiOutlinePlus,AiOutlineEdit,AiOutlineArrowRight } from 'react-icons/ai'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
  const [open,setOpen] = useState(false)
  

  return (
    <section>
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
     <div className={open ? 'h-full w-1/4 bg-bg fixed top-0 right-0 p-6' : 'transition hidden right-[-50px]'}>
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
    </section>
  )
}

export default ListProduct