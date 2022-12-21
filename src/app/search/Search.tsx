'use client'

import { trpcHook } from '@utils/trpcHook'
import { useCallback, useMemo, useState } from 'react'

export const Search = () => {


  return (
  
<div className="flex justify-center bg-white">

  <div className="w-full border-l border-r">
  <input type="search" name="search" placeholder="Search Twitter" className="bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"/>
    <div className="flex mt-3 border-b">
      <div className="px-8 hover:bg-blue-50 justify-center border-b-4 border-blue-400 text-blue-400 py-5 cursor-pointer transition">
        <p className="text-center font-bold">Top</p>
      </div>
    </div>
    
    <div className="p-3">
      <div>
        <p className="text-sm font-bold ml-8 text-gray-500">
          <i className="fas fa-thumbtack"></i>
          
        </p>
        
        <div className="mt-2">
          <div className="flex">
            <div>
              <img className="w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1111915116579086336/HKxtnLsO_reasonably_small.jpg" />
            </div>

            <div className="ml-4">
              <p>
                <span className="font-bold">Josh W</span> <span className="text-gray-500">@welfordian · Jul 21</span>
              </p>

              <p>
                Launched my new website a few weeks ago Rocket. Any feedback? Too boring? Too basic? Not sure what else to add to it! 
              </p>
            </div>
          </div>
          
          <div className="flex flex-1 rounded-lg border ml-14 mt-3 cursor-pointer">
            
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
