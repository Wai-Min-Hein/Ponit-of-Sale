import { Button, Group, Modal, Pagination, Table,Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus,AiOutlineEdit,AiOutlineArrowRight,AiOutlineSearch,AiOutlineUnorderedList} from 'react-icons/ai'
import { BiMinus } from 'react-icons/bi'
import { BsGrid } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import "../../../styles/userlist.css"
const ViewList = () => {
  const [search,setSearch] = useState('')
  const [opened, { open, close }] = useDisclosure(false);
  const nav = useNavigate()
  const handleBan = ()=>{
    nav('/ban_user')
  }
  return (
    <section className='bg-bg min-h-screen w-full p-6'>
    <div className=' mx-auto grid gap-5'>
      <div className="flex justify-between items-center py-3">
          <div>
          <h1 className='text-xl text-white mb-2'>User</h1>
          <span className='text-gray-50'>User / Overview</span>
          </div>
          <Link to={'/createuser'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
                <AiOutlinePlus/>
                <span>Create User</span>
              </button>
          </Link>
      </div>
      
      <div className="flex justify-between items-end py-3">
        <div className=''>
          <h1 className='text-xl text-white mb-3'>Staff Overview</h1>
          <div className='border flex border-border rounded-xl p-2'>
            <AiOutlineSearch className='text-white text-2xl me-2'/>
            <input type="text" value={search} placeholder='Search' onChange={e=>setSearch(e.target.value)} className='bg-bg focus:outline-none text-white' />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-50'>
            Sort: {" "}
            <select name="sort" id="sort" className='bg-bg font-light text-white focus:outline-none'>
              <option value="Last">Last</option>
            </select>
          </span>
          <span className='text-gray-50'>
            Filter: {" "}
            <select name="filter" id="filter" className='bg-bg font-light text-white focus:outline-none'>
              <option value="filter" >All File</option>
            </select>
          </span>
          <div className=''>
            <button>
              <AiOutlineUnorderedList/>
            </button>
            <button>
              <BsGrid/>
            </button>
          </div>
        </div>
      </div>
      
      <div className='grid gap-48'>
      <Table className='text-white opacity-80 border border-border'>
        <thead>
          <tr className=''>
            <th>NO</th>
            <th>NAME</th>
            <th>POSITION</th>
            <th>EMAIL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td>2</td>
            <td className=' uppercase'>Nyeint</td>
            <td className=' capitalize'>Admin</td>
            <td>myain123@gmail.com</td>
            <td className='flex gap-3 justify-end'>
              <Button onClick={open} className='!px-0 hover:bg-bg'>
              <AiOutlineMinus className='w-8 h-8 bg-border opacity-60 text-white rounded-full p-2'/>
              </Button>
              <Link to={'/edit'}>
              <AiOutlineEdit className='w-8 h-8 bg-border opacity-60 text-white rounded-full p-2'/>
              </Link>
              <Link to={'/view_user'}  className=''>
              <AiOutlineArrowRight className='w-8 h-8 bg-border opacity-60 text-white rounded-full p-2'/>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Pagination total={3} position='right'
       styles={(theme) => ({
        control: {
          color: '#fff',
          gap: 0,
          border: '1px solid #3f4245',
          ':hover':{
            backgroundColor:'#787f80 !important ',
          },
          '&[data-active]': {
            backgroundColor: "#D9D9D91A",
            border: 0,
            color: "#000"
          },
        },
      })}/>
      </div>
     
      <Modal opened={opened} onClose={close} centered title="Ban User" size="lg">
        <div className='w-32 h-32 mx-auto rounded-full bg-gray-100 flex justify-center items-center'>
        <BiMinus className='text-danger p-7 bg-gray-100 opacity-60 border border-danger w-20 h-20 rounded-full'/>
        </div>
        <Text className='text-xl '>Do you want to ban this user?</Text>
        <Group mt="xl" position='center' className='flex gap-10'>
          <Button className='border border-white font-normal transition pt-1 hover:bg-white hover:text-gray-50' onClick={close}>
            CANCEL
          </Button>
          <Button className='border bg-danger font-normal text-center pt-1 transition hover:bg-white hover:text-danger' onClick={handleBan}>
            BAN USER
          </Button>
        </Group>
      </Modal>
    
    </div>
    </section>
  )
}

export default ViewList