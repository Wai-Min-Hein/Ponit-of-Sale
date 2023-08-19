import React from 'react'

const UpLogin = () => {
  return (
    <section>
      <div className='card  bg-bg-dark opacity-80 relative p-10 pt-8 pr-6 grid gap-5 rounded shadow'>
       <div className="card-body mt-5 text-white opacity-80">
       <div className="card-body grid gap-8">
           <div className='grid grid-cols-3'>
            <label htmlFor="phone" className='text-white font-bold'>Phone Number</label>
            <input type="phone" id='phone' placeholder='+95 9634769087' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
           <div className='grid grid-cols-3'>
            <label htmlFor="email" className='text-white font-bold'>Mail</label>
            <input type="email" id='email' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
           </div>
        </div>
         </div>
      </div>
    </section>
  )
}

export default UpLogin