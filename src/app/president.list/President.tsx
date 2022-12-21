'use client'

import { useCallback, useMemo, useState } from 'react'
import { trpcHook } from '../../utils/trpcHook'

export const President = () => {
  const [name, setName] = useState('')
  const [term, setTerm] = useState('')
  const [url, setUrl] = useState('')
  const presidentMutation = trpcHook.addPresident.useMutation()
  // const data = trpcHook.getPresidentList.useQuery({ userId: 1 })

  
  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const termChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }
  const urlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const addPresident = useCallback(() => {
    presidentMutation.mutate({ userId: 1, name: name, term: term, imageUrl: url })
    setName('')
    setTerm('')
    setUrl('')
  }, [presidentMutation])

  return (
    <div className="mb-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            President Name
          </label>
          <input required value={name}  onChange={nameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
         </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Term
          </label>
          <input required value={term} onChange={termChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            URL
          </label>
          <input required value={url} onChange={urlChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
        </div>
  
        <div className="flex items-center justify-between">
          <button onClick={addPresident} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            ADD
          </button>
        </div>
      </div>
    </div>
  )
}
