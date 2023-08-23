import { Radio, Stepper } from '@mantine/core'
import React, { useState } from 'react'
import {AiOutlineArrowRight,AiOutlineDollarCircle} from 'react-icons/ai'
import {FiShoppingBag} from 'react-icons/fi'
import {TbPhotoCheck} from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
const AddPrice = () => {
    const [active, setActive] = useState(0);
    const nav = useNavigate()

    const handleSubmit =(e)=>{
      e.preventDefault()
      const name = e.target.pname.value
      const brand = e.target.brand.value
      const date_of_birth = e.target.date.value
      const address = e.target.address.value
      const gender = e.target.gender.value

      const data = {name,brand,address,date_of_birth,gender}
      console.log(data)
      if(data){
        nav('/create_s')
      }

    }
  return (
    <section className='bg-bg min-h-screen w-full p-6'>
    <div className=' mx-auto grid gap-10'>
      <div className="flex justify-between items-center py-3 ">
          <div>
          <h1 className='text-xl text-white mb-2'>Add Product</h1>
          <span className='text-gray-50'>Inventory / Add Product</span>
          </div>
          <Link to={'/prod_view'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
             <span>Product List</span>
          </button>
          </Link>
      </div>

     <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5 items-start">
     <div className="card bg-bg-dark p-12 rounded border border-border col-span-2">
        <div className="card-body grid gap-8">
           <div className='grid grid-cols-3'>
            <label htmlFor="actual-price" className='text-white font-bold'>Actual-Price</label>
            <input type="text" id='actual-price' placeholder='Your Name' min={3} className=' col-span-2 bg-bg border border-gray-50 px-4 py-2 text-gray-50 focus:outline-none rounded' required/>
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="sale-price" className='text-white font-bold'>Sale-Price</label>
            <input type="brand" id='sale-price' placeholder='10000' className=' col-span-2 bg-gray-100 border border-primary   px-4 py-2 text-gray-50 focus:outline-none rounded' required />
           </div>
        </div>
    </div>
    <div className='mt-10 ml-10'>
        <Stepper active={active} onStepClick={setActive} orientation="vertical">
          <Stepper.Step className='h-36' icon={<FiShoppingBag size="1.1rem" />} label="Information" />
          <Stepper.Step className=' h-36' icon={<AiOutlineDollarCircle size="1.1rem" />} label="Price" />
          <Stepper.Step icon={<TbPhotoCheck size="1.1rem" />} label="Photo" />
        </Stepper>
        <button type="submit" className='bg-btn flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
            <span>Next</span>
            <AiOutlineArrowRight/>
        </button>
    </div>
     </form>
    </div>
    </section>
  )
}

export default AddPrice