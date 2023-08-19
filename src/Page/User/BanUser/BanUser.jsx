import { Button, Group, Modal, Pagination, Table,Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineSearch} from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
const BanUser = () => {
  const [search,setSearch] = useState('')
  const [opened, { open, close }] = useDisclosure(false);
  const nav = useNavigate()
  const handleRestore = ()=>{
    nav('/view_list')
  }
  return (
    <section className='bg-bg min-h-screen'>
    <div className='container mx-auto grid gap-5'>
      <div className="flex justify-between items-center py-3">
          <div>
          <h1 className='text-xl text-white mb-2'>Ban User</h1>
          <span className='text-gray-50'>User / Banned</span>
          </div>
          <Link to={'/create_f'}>
          <button className='bg-primary flex items-center gap-2 text-bg-dark px-4 py-1 border-0 rounded-md transition hover:text-white'>
                <AiOutlinePlus/>
                <span>Create User</span>
              </button>
          </Link>
      </div>
      
      <div className="flex justify-between items-end py-3">
        <div className=''>
          <h1 className='text-xl text-white mb-3'>Banned User Overview</h1>
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
            <td onClick={open} className='flex justify-end'>
                <Button className='border-2 border-white rounded-md pt-2 pb-1 px-3 transition hover:bg-border'>RESTORE</Button>
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
     
      <Modal opened={opened} onClose={close} centered title="Restore User" size="lg">
        <div className='w-32 h-32 mx-auto rounded-full bg-gray-100 flex justify-center items-center'>
        <BiPlus className='text-white p-7 bg-gray-100 opacity-60 border border-gray-50 w-20 h-20 rounded-full'/>
        </div>
        <Text className='text-xl '>Do you want to restore this user?</Text>
        <Group mt="xl" position='center' className='flex gap-10'>
          <Button className='border border-white bg-bg font-normal transition pt-1 hover:bg-white hover:text-gray-50' onClick={close} >
            CANCEL
          </Button>
         <Button className='border bg-white font-normal cursor-pointer text-bg-dark transition pt-1 hover:border-white hover:bg-bg hover:text-white' onClick={handleRestore}>
            RESTORE
         </Button>
        </Group>
      </Modal>
    
    </div>
    </section>
  )
}

export default BanUser