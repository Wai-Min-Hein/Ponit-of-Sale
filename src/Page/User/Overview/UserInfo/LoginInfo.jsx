import React from 'react'

const LoginInfo = () => {
  return (
    <section>
        <div className="card  bg-bg-dark opacity-80 relative p-10 pt-6 pr-6 grid gap-5 rounded shadow">
        <div className="card-body mt-5 text-white opacity-80">
              <ul className='grid gap-5'>
                  <li className='grid grid-cols-3'>
                      <h1 className=''>Phone</h1>
                      <span className=' col-span-2'>: 0985678787</span>
                  </li>
                  <li className='grid grid-cols-3'>
                      <h1 className=''>Position</h1>
                      <span className=' col-span-2'>: Sale Executive</span>
                  </li>
                  <li className='grid grid-cols-3'>
                      <h1 className=''>Mail</h1>
                      <span className=' col-span-2'>: ethan123@gmail.com</span>
                  </li>
              </ul>
          </div>
        </div>
    </section>
  )
}

export default LoginInfo