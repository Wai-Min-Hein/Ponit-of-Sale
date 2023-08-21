import { Radio, Stepper } from '@mantine/core'
import React, { useState } from 'react'
import {AiOutlineArrowRight,AiOutlineLogin} from 'react-icons/ai'
import {FiUserCheck} from 'react-icons/fi'
import {TbPhotoCheck} from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
const FCreate = () => {
    const [active, setActive] = useState(0);
    const nav = useNavigate()

    const handleSubmit =(e)=>{
      e.preventDefault()
      const name = e.target.name.value
      const phone = e.target.phone.value
      const date_of_birth = e.target.date.value
      const address = e.target.address.value
      const gender = e.target.gender.value

      const data = {name,phone,address,date_of_birth,gender}
      console.log(data)
      if(data){
        nav('/create_s')
      }

    }
  return (
    <section className='bg-bg min-h-screen'>
    <div className='container mx-auto grid gap-10'>
      <div className="flex justify-between items-center py-3 ">
          <div>
          <h1 className='text-xl text-white mb-2'>User</h1>
          <span className='text-gray-50'>User / Create User</span>
          </div>
          <Link to={'/view_list'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
             <span>User List</span>
          </button>
          </Link>
      </div>

     <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5 items-start">
     <div className="card bg-bg-dark p-12 rounded border border-border col-span-2">
        <div className="card-body grid gap-8">
           <div className='grid grid-cols-3'>
            <label htmlFor="name" className='text-white font-bold'>Name</label>
            <input type="text" id='name' placeholder='Your Name' min={3} className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' required/>
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="phone" className='text-white font-bold'>Phone</label>
            <input type="phone" id='phone' placeholder='+95 9634769087' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' required />
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="date" className='text-white font-bold'>Date of Birth</label>
            <input type="date" id='date' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' required/>
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="gender" className='text-white font-bold'>Gender</label>          
            <Radio.Group id='gender' className='flex gap-5 col-span-2' >
                <Radio value='male' id='gender' label='Male' required/>
                <Radio value='female' id='gender' label='Female' required/>
            </Radio.Group>
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="address" className='text-white font-bold'>Address</label>
            <textarea name="address" id="address" cols="10" rows="3" placeholder='Address' maxLength={30} className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' required></textarea>
           </div>
        </div>
    </div>
    <div className='mt-10 ml-10'>
        <Stepper active={active} onStepClick={setActive} orientation="vertical">
          <Stepper.Step className='h-36' icon={<FiUserCheck size="1.1rem" />} label="Personal" />
          <Stepper.Step className=' h-36' icon={<AiOutlineLogin size="1.1rem" />} label="Login Info" />
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

export default FCreate