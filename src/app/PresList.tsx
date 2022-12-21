'use client'

import { trpcHook } from '../utils/trpcHook'
import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

 export const PresList = () => {

  const data = trpcHook.getPresidentList.useQuery()
  const presidentList = useMemo(() => {
    if (data.data && data.data.length > 0) {
      return data.data.map(({ id, name, term, imageUrl }) => {
        return (
          <li className="mt-4 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg" key={id}>
          
          {name} {term}
          <p><Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={imageUrl}>See Image</Link></p>
          {/* <Image
        src={imageUrl}
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      /> */}
          </li>
          
        )
      })
    } else {
      return <>No entries Found</>
    }
  }, [data.data])
  
  return (
    <div>
      {presidentList}
    </div>
 
  )
}


