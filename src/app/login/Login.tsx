'use client'

import { trpcHook } from '@utils/trpcHook'
import { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'

export const Login = () => {
  const data = trpcHook.getAllUser.useQuery()

  const userList = useMemo(() => {
    if (data.data && data.data.length > 0) {
      return data.data.map(({ userId, username }) => {
        return (
          <li className="list-none mt-4 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg" key={userId}>
          <p><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={'/timeline?id=' + userId}>{username}</a></p>
          </li>
        )
      })
    } else {
      return <>No Users Found</>
    }
  }, [data.data])
  return (
    <div className="items-center justify-center">
      <h1 className="text-2xl">Select user to login</h1>

      <div>{userList}</div>
    
    </div>
  )
}
