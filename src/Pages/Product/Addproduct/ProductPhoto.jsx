import { Radio, Stepper,Image } from '@mantine/core'
import React, { useState } from 'react'
import {AiOutlineArrowRight,AiOutlineLogin} from 'react-icons/ai'
import {FiUserCheck} from 'react-icons/fi'
import {TbPhotoCheck} from 'react-icons/tb'
import {PiUserFocusDuotone} from 'react-icons/pi'
import {BiEditAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const ProductPhoto = () => {
    const [active, setActive] = useState(0);
    const handleClear = ()=>{

    }
  return (
    <section className='bg-bg min-h-screen w-full p-6'>
    <div className=' mx-auto grid gap-10'>
      <div className="flex justify-between items-center py-3 ">
          <div>
          <h1 className='text-xl text-white mb-2'>Add Product</h1>
          <span className='text-gray-50'>Inventory / Add Product</span>
          </div>
          <Link to={'/view_list'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
             <span>Product List</span>
          </button>
          </Link>
      </div>

     <div className="grid grid-cols-3 gap-5 items-start">
     <div className="card bg-bg-dark p-12 rounded border border-border col-span-2">
        <div className="card-body flex flex-col gap-8 justify-center items-center">
            <h1 className='text-white'>Upload Photo</h1>
            <div className='relative h-40 w-40 bg-bg rounded-full border-2 border-primary border-dashed'>
            <PiUserFocusDuotone className=' text-white text-[3rem] absolute z-40 top-14 left-14'/>
            <BiEditAlt className='text-bg-dark rounded-full border border-bg-dark w-9 h-9 p-1.5 bg-white absolute top-28 right-0'/>
            </div>
            <button className=' w-32 gap-2 text-white border border-white px-4 py-1 rounded-md transition' onClick={handleClear}>
                <span>Clear Photo</span>
            </button>
        </div>
    </div>
    <div className='mt-10 ml-10'>
        <Stepper active={active} onStepClick={setActive} orientation="vertical">
          <Stepper.Step className='h-40' icon={<FiUserCheck size="1.1rem" />} label="Personal" />
          <Stepper.Step className='h-40' icon={<AiOutlineLogin size="1.1rem" />} label="Login Info" />
          <Stepper.Step icon={<TbPhotoCheck size="1.1rem" />} label="Photo" />
        </Stepper>
        <button className='bg-btn flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
            <span>Next</span>
            <AiOutlineArrowRight/>
        </button>
    </div>
     </div>
    </div>
    </section>
  )
}

export default ProductPhoto