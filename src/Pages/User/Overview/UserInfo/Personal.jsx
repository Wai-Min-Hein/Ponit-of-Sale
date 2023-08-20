import React from 'react'

const Personal = () => {
  return (
    <section>
      <div className='card  bg-bg-dark opacity-80 relative p-10 pt-8 pr-6 grid gap-5 rounded shadow'>
       <div className="card-body mt-5 text-white opacity-80">
            <ul className='grid gap-5'>
                <li className='grid grid-cols-3'>
                    <h1 className=''>Phone</h1>
                    <span className=' col-span-2'>: 0985678787</span>
                </li>
                <li className='grid grid-cols-3'>
                    <h1 className=''>Mail</h1>
                    <span className=' col-span-2'>: ethan123@gmail.com</span>
                </li>
                <li className='grid grid-cols-3'>
                    <h1 className=''>Address</h1>
                    <span className=' col-span-2'>: No2,Baho Street,Bahan,Yangon</span>
                </li>
                <li className='grid grid-cols-3'>
                    <h1>Gender</h1>
                    <span className=' col-span-2'>: Male</span>
                </li>
                <li className='grid grid-cols-3'>
                    <h1>Date Of Bith</h1>
                    <span className=' col-span-2'>: 12/4/1999</span>
                </li>
            </ul>
         </div>
      </div>
    </section>
  )
}

export default Personal