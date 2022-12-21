'use client'

import { trpcHook } from '@utils/trpcHook'
import { useCallback, useMemo, useState } from 'react'
import MyProfile from './MyProfile'
import Tweets from './Tweets'

export const Profile = () => {
  const location = window.location.search
  const params = new URLSearchParams(location);
  let data = trpcHook.getUserAndPost.useQuery({userId: parseInt(params.get('id'), 10)})

  const postList = useMemo(() => {
    if (data.data && data.data.length > 0) {
      return <MyProfile user={data.data[0]}/>
    } 
  }, data.data)

  const getTweets = useMemo(() => {

    if (data.data && data.data.length > 0) {
      return data.data[0].posts.map(({ postId, userId, description, date}) => {   
        return <Tweets user={data.data[0]} postId={postId} userId={userId} description={description} date={date}/>
      })
    } else {
      return <>No Tweets Found</>
    }
  }, data.data)


  return (
  <div className="flex justify-center bg-white">
  <div className="w-full border-l border-r">
    <div className="flex p-4 items-center">
      <div>
        <i className="fas fa-arrow-left text-blue-400 text-lg"></i>
      </div>
    </div>
    
    <div>
      <img src="https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg" />
    </div>
    
    <div className="flex justify-between">
      <div className="rounded-full border-4 border-white inline-block -mt-16 ml-3">
        <img className="w-32 rounded-full" src="https://pbs.twimg.com/profile_images/1111915116579086336/HKxtnLsO_reasonably_small.jpg" />
      </div>
    
    </div>
    
    {postList}
    
    <div className="flex mt-3 border-b">
      <div className="px-8 hover:bg-blue-50 justify-center border-b-4 border-blue-400 text-blue-400 py-5 cursor-pointer transition">
        <p className="text-center font-bold">Tweets</p>
      </div>
    </div>
    
    <div className="p-3">
      <div>
        <p className="text-sm font-bold ml-8 text-gray-500">
          <i className="fas fa-thumbtack"></i>
          
        </p>
      
      {getTweets}
        
      </div>
    </div>
  </div>
</div>  


  )
}
