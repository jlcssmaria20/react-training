'use client'

import { trpcHook } from '@utils/trpcHook'
import { useCallback, useMemo, useState } from 'react'
import Feed from './Feed'



export const Post =  (
  
    props
  
) => {
  const [post, setPost] = useState('')


  const data = trpcHook.getAllPost.useQuery()
  const postMutation = trpcHook.addPost.useMutation()

  const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(e.target.value)
  }
  
  const location = window.location.search
  const params = new URLSearchParams(location);
  const addPost = useCallback(() => {
    
    
    postMutation.mutate({ userId: parseInt(params.get('id'), 10), description: post})
    setPost('')
  }, [postMutation])

  const postList = useMemo(() => {
    if (data.data && data.data.length > 0) {
      return data.data.map(({ postId, userId, description, date ,user}) => {   
        return <Feed description={description} date={date} user={user} />
      })
    } else {
      return <>No Tweets Found</>
    }
  }, [data.data])

  return (
  <div className="max-w-xl mx-auto my-6">

    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What's happening?</label>
        <input value={post} onChange={handleChat} type="text" id="large-input" className="border-none block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div className="float-right">
      <button onClick={addPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4">
        Tweet
      </button>
    </div>
   
    {postList}
  </div>
  )
}
