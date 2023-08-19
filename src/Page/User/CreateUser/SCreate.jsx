import { Radio, Stepper } from '@mantine/core'
import React, { useState } from 'react'
import {AiOutlineArrowRight,AiOutlineLogin} from 'react-icons/ai'
import {FiUserCheck} from 'react-icons/fi'
import {TbPhotoCheck} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SCreate = () => {
    const [active, setActive] = useState(0);
  return (
    <section className='bg-bg min-h-screen'>
    <div className='container mx-auto grid gap-10'>
      <div className="flex justify-between items-center py-3 ">
          <div>
          <h1 className='text-xl text-white '>User</h1>
          <span className='text-gray-50'>User / Create User</span>
          </div>
          <Link to={'/view_list'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
             <span>User List</span>
          </button>
          </Link>
      </div>

     <div className="grid grid-cols-3 gap-5 items-start">
     <div className="card bg-bg-dark p-12 rounded border border-border col-span-2">
        <div className="card-body grid gap-8">
           <div className='grid grid-cols-3'>
            <label htmlFor="position" className='text-white font-bold'>Position</label>
            <select id="position" name="position"  className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' >
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
            </select>
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="email" className='text-white font-bold'>Email</label>
            <input type="email" id='email' placeholder='exampl@gmail.com' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="password" className='text-white font-bold'>Password</label>
            <input type="password" id='password' placeholder='........' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
           
           <div className='grid grid-cols-3'>
            <label htmlFor="confirm_password" className='text-white font-bold'>Confirm Password</label>
            <input type="password" id='confirm_password' placeholder='........' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
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

export default SCreate