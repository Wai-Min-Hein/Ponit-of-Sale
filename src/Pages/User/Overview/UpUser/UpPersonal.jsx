import { Radio } from '@mantine/core'
import React from 'react'

const UpPersonal = () => {
  return (
    <section>
      <div className='card  bg-bg-dark opacity-80 relative p-10 pt-8 pr-6 grid gap-5 rounded shadow'>
       <div className="card-body mt-5 text-white opacity-80">
       <div className="card-body grid gap-8">
           <div className='grid grid-cols-3'>
            <label htmlFor="name" className='text-white font-bold'>Name</label>
            <input type="text" placeholder='Your Name' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="phone" className='text-white font-bold'>Phone</label>
            <input type="phone" id='phone' placeholder='+95 9634769087' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="date" className='text-white font-bold'>Date of Birth</label>
            <input type="date" id='date' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="gender" className='text-white font-bold'>Gender</label>          
            <Radio.Group id='gender' className='flex gap-5 col-span-2'>
                <Radio value='male' label='Male'/>
                <Radio value='female' label='Female'/>
            </Radio.Group>
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="address" className='text-white font-bold'>Address</label>
            <textarea name="address" id="address" cols="10" rows="3" placeholder='Address' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' ></textarea>
           </div>
        </div>
         </div>
      </div>
    </section>
  )
}

export default UpPersonal