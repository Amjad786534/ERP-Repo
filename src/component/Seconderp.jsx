import React, { useState } from 'react'

const Seconderp = () => {

  return (
    <div className="bg-gray-50">
      {/* Tabs */}
      <div className="flex gap-0 mb-6 border-b border-gray-300">
        <button className="px-4 py-2 bg-teal-600 text-white font-medium">Contract Detail</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Payment Detail</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Packing Material (PMMP)</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Other Items</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Other Charges</button>
      </div>

      {/* Header */}
      <div className="bg-teal-600 text-white px-4 py-3 font-semibold">
        Contract Detail
      </div>

      {/* Form Section */}
      <div className="bg-white border border-gray-300 rounded-b-lg p-6 mb-6">
        <div className="grid grid-cols-8 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>--Select Any Value--</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Farming N Trade</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>--Select Any Value--</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Crop Year</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option></option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">FQ Qty</label>
            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" value="0" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">M.Tons</label>
            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" value="0" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate</label>
            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rate UOM</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option></option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" value="0" />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" rows="3"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Farming N Trade</label>
            <select className="w-full px-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>__Select Any Value__</option>
            </select>
          </div>
          <div className='mt-8'>
            <button className="bg-teal-600 py-2 cursor-pointer hover:bg-teal-700 text-white px-4 rounded-md font-medium flex items-center gap-2">
              <span>+</span> Add
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-sky-200 grid grid-cols-12 gap-0 border-b border-sky-300">
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Item Code</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Item Name</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Product</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Crop Year</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">FQ Qty</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">M.Tons</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Rate</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Rate UDM</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Amount</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Other Item Amount</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">Commodity Detail</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1">Farming M Trade Remarks</div>
        </div>

        {/* Empty Row */}
        <div className="grid grid-cols-12 gap-0 border-b border-gray-300 bg-blue-50 min-h-16">
        </div>

       
        <div className="bg-sky-200 grid grid-cols-12 gap-0 border-b border-sky-300">
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">0</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">0</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300">0</div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1 border-r border-gray-300"></div>
          <div className="px-4 py-2 text-sm font-semibold text-sky-700 col-span-1"></div>
        </div>

        
      </div>

      {/* Pagination and Navigation */}
      <div className="bg-sky-100 px-4 py-3 flex items-center gap-2 border border-t-gray-300">
        <span className="text-sm text-sky-700">Record :</span>
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 text-sm">|{'<'}</button>
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 text-sm">{'<'}</button>
        <div>
            <input type="text" className="w-12 px-2 py-1 border border-gray-400 rounded text-center text-sm" placeholder="0" />
            <span className="mx-2 text-sm text-sky-700">of 0</span>
        </div>
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 text-sm">{'>'}</button>
        <button className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 text-sm">{'>'}|</button>
      </div>

      {/* Form History Tabs */}
      <div className="flex gap-0 mt-6 border-b border-gray-300">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 font-medium">Form</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">History</button>
      </div>
    </div>
  )
}

export default Seconderp