
import { useState } from 'react'
import './App.css'

function App() {
const [date,setDate]=useState("13-jan-26")
  return (

    <div>
      <div className="w-full ">
        {/* HEADER BAR */}
        <div className="flex items-center justify-between bg-teal-600 h-10 px-4 text-white">

          {/* Left Title */}
          <div className=" text-lg font-bold">
            Master Contract / Proforma
          </div>

          {/* Center Company Dropdown */}
          <div className="flex items-center gap-2 text-lg font-bold">
            <span>Company</span>
            <select className="h-7 w-52 bg-white text-gray-600 text-xs px-2 rounded border border-gray-300 focus:outline-none">
              <option>...Select Any Value...</option>
            </select>
          </div>

          {/* Right Print Button */}
          <button className="flex items-center gap-1 bg-teal-600 hover:bg-teal-500 px-3 font-medium  ">
            <span className='flex items-center'><input type="checkbox" /></span>
            Print Preview
          </button>
        </div>
      </div>


      <div className='w-[1000px] border border-gray-400  mt-3 ml-2'>
        <div className='w-1/2 '>
          <div className='w-full flex justify-between '>
            <div className='flex'>
              <span className='text-sm '>Contact No.</span>
              <span className='ml-7'>
                <span className="text-red-500">*</span>
                <input type="text" className="h-[22px] w-[110px] border bg-white border-gray-400 px-1" />
              </span>
            </div>
             <div className="flex items-center ">
            <label className="text-sm pr-2">Contract Date</label>
            <div className="relative">
              <input
                type="text"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="w-[110px] h-[22px] text-sm border border-gray-300 px-1 pr-6 bg-gray-100"
              />
              <span className="absolute right-1  text-gray-600">📅</span>
            </div>
          </div>
          </div>
        </div>


        <div className="flex items-center">
          <label className=" text-right mr-1">
            <span className='text-sm'>Seller / Exporter</span>
          </label>
          <span className="text-red-500">*</span>
          <select className="h-[26px] w-[390px] border border-gray-400 px-1 bg-white outline-0 text-sm">
            <option>..Select Any Value..</option>
          </select>
        </div>
        <span>
          <input type="text" className='py-4 border-2 border-gray-500 outline-0 w-[498px]' />
        </span>
        <div className="flex items-center">
          <label className=" text-right mr-1">
          <span className='text-sm'>Buyer/Customer</span>
          </label>
          <span className="text-red-500">*</span>
          <select className="h-[26px] w-[390px] border border-gray-400 px-1 bg-white outline-0 text-sm">
            <option>..Select Any Value..</option>
          </select>
        </div>
        <span>
          <input type="text" className='py-4 border-2 border-gray-500 outline-0 w-[500px]' />
        </span>


<div className='w-1/2 flex justify-between '>
            <div className='flex'>
              <span className='text-sm '>Customer Order</span>
              <span className='ml-7'>
                <span className="text-red-500">*</span>
                <input type="text" className="h-[22px] w-[110px] border bg-white border-gray-400 px-1" />
              </span>
            </div>
             <div className="flex items-center ">
            <label className="text-sm pr-2">Order Date
            </label>
            <div className="relative">
              <span className='text-red-500'>*</span>
              <input
                type="text"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="w-[110px] h-[22px] text-sm border border-gray-300 px-1 pr-6 bg-gray-100"
              />
              <span className="absolute right-1  text-gray-600">📅</span>
            </div>
          </div>
          </div>


        <div className="bg-white text-[11px] font-sans p-2">
      <div className="space-y-2">

        {/* Customer Order # + Order Date */}
        

        {/* Importer Bank */}
        <div className="flex items-center">
          <label className=" pr-2 ">Importer Bank</label>
          <select className="h-[22px] w-[600px] border border-gray-300 px-1 bg-white">
            <option>...Select Any Value...</option>
          </select>
        </div>

        {/* Exporter Bank */}
        <div className="flex items-center">
          <label className=" pr-2">Exporter Bank</label>
          <select className="h-[22px] w-[600px] border border-gray-300 px-1 bg-white">
            <option>...Select Any Value...</option>
          </select>
        </div>

        {/* Ship Start Date + Ship Last Date */}
        <div className="flex items-center">
          <div className="flex items-center w-[420px]">
            <label className=" pr-2">Ship.Start Date</label>
            <div className="relative">
              <input
                type="text"
                value="13-Jan-26"
                readOnly
                className="h-[22px] w-[150px] border border-gray-300 px-1 pr-6 bg-gray-100"
              />
              <span className="absolute right-1 top-[3px] text-gray-600">📅</span>
            </div>
          </div>

          <div className="flex items-center ml-6">
            <label className=" pr-2">Ship.Last Date</label>
            <div className="relative">
              <input
                type="text"
                value="13-Jan-26"
                readOnly
                className="h-[22px] w-[150px] border border-gray-300 px-1 pr-6 bg-gray-100"
              />
              <span className="absolute right-1 top-[3px] text-gray-600">📅</span>
            </div>
          </div>
        </div>

      </div>
    </div>
        <div className='w-1/2'>

        </div>
      </div>

    </div>


  )
}

export default App
