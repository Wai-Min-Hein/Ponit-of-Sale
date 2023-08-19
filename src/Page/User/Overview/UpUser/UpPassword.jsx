import React from 'react'

const UpPassword = () => {
  return (
    <section>
    <div className='card  bg-bg-dark opacity-80 relative p-10 pt-8 pr-6 grid gap-5 rounded shadow'>
     <div className="card-body mt-5 text-white opacity-80">
     <div className="card-body grid gap-8">
         <div className='grid grid-cols-3'>
          <label htmlFor="curpas" className='text-white font-bold'>Current Password</label>
          <input type="password" id='curpas' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
         </div>
         <div className='grid grid-cols-3'>
          <label htmlFor="newpas" className='text-white font-bold'>New Password</label>
          <input type="password" id='newpas' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
         </div>
         <div className='grid grid-cols-3'>
          <label htmlFor="confpas" className='text-white font-bold'>Confirm Password</label>
          <input type="password" id='confpas' className=' col-span-2 bg-bg border border-border px-4 py-2 text-gray-50 focus:outline-none rounded' />
         </div>
      </div>
       </div>
    </div>
  </section>
  )
}

export default UpPassword