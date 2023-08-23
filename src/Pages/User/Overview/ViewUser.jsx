import React from 'react'
import {HiOutlineMailOpen,HiOutlinePhoneOutgoing} from 'react-icons/hi'
import {BiEditAlt} from 'react-icons/bi'
import { useState } from 'react';
import {AiOutlineShop} from 'react-icons/ai'
import { Box, NavLink } from '@mantine/core';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../../styles/userprofile.css';
const data = [
    { icon: AiOutlineShop, label: 'Personal', link: '/view_user'},
    {
      icon: AiOutlineShop, label: 'Login Information ', link : 'info'
    },
    { icon: AiOutlineShop, label: 'Password', link: 'password'},
  ];
const ViewUser = () => {
  const [active, setActive] = useState(0);
  const nav = useNavigate()
  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      icon={<item.icon size="1.5rem" color='#8ab4f8' stroke={1.5} />}
      onClick={()=>(setActive(index),nav(`${item.link}`))}
    />
  ));
  return (
    <section className='bg-bg min-h-screen w-full p-6'>
      <div className=' mx-auto'>
        <div className="flex justify-between items-center py-3 mb-10">
            <div>
            <h1 className='text-xl text-white '>User</h1>
            <span className='text-gray-50'>User / Overview</span>
            </div>
            <Link to={'/up_user'}>
            <button className='bg-primary text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
                <span>Update User</span>
            </button>
            </Link>
        </div>
        
       <div className="card bg-bg-dark relative p-10 pr-6 grid gap-5 mt-10 rounded shadow">
         <div className="flex justify-between items-end">
            <div className="w-32 h-32 rounded-full bg-border absolute top-[-30px]">
              <BiEditAlt className='text-bg-dark rounded-full border border-bg-dark w-9 h-9 p-1.5 bg-white absolute top-20 left-24'/>
            </div>
            <div className=' ml-36 pl-10'>
                <h1 className='text-xl text-white'>Ethan James</h1>
                <span className='text-gray-50'>Sale Executive</span>
            </div>
            <div className="flex gap-3">
                <HiOutlineMailOpen className='bg-border opacity-60 w-8 h-8 p-2 rounded-full text-white transition hover:bg-gray-50'/>
                <HiOutlinePhoneOutgoing className='bg-border opacity-60 w-8 h-8 p-2 rounded-full text-white transition hover:bg-gray-50'/>
            </div>
         </div>

         <Box w={650} className='flex'>{items}</Box>

         <div className=' h-0.5 absolute left-0 bottom-0 right-0 bg-white'></div>
        
      
       </div>
      
       <Outlet/>
      </div>
    </section>
  )
}

export default ViewUser