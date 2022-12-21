'use client'

import { trpcHook } from '@utils/trpcHook'
import { useCallback, useMemo, useState } from 'react'

export const Chat = () => {
  const [chat, setChat] = useState('')
  const data = trpcHook.getChat.useQuery({ userId: 1 })
  const userMutation = trpcHook.addUser.useMutation()
  const chatMutation = trpcHook.addChat.useMutation()

  const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChat(e.target.value)
  }

  const addUser = useCallback(() => {
    userMutation.mutate({ username: 'New name' })
  }, [userMutation])

  const addChat = useCallback(() => {
    chatMutation.mutate({ userId: 1, userMsg: chat })
  }, [chatMutation, chat])

  const chatList = useMemo(() => {
    if (data.data && data.data.length > 0) {
      return data.data.map(({ id, msg }) => {
        return <li key={id}>{msg}</li>
      })
    } else {
      return <>No Chat</>
    }
  }, [data.data])

  return (
    <div>
      <ul className="h-[calc(100vh-200px)] w-pc p-8">{chatList}</ul>
      <button onClick={addUser}>Add User</button>

      {userMutation.error && (
        <p>Something went wrong! {userMutation.error.message}</p>
      )}
      <button onClick={addChat}>Enter</button>
      <input
        id="chatbox"
        className="w-pc border-2 border-red-300"
        onChange={handleChat}
        value={chat}
      />
    </div>
  )
}
