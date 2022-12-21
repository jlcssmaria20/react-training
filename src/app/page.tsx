'use client'

import { Button } from '@atom/Button'
import Link from 'next/link'
import { useState } from 'react'
import { StateSample } from './StateSample'

export default function Home() {
  const [name, setName] = useState('')
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <div>
      <Link href="/chat">Feature sample - Chat</Link>
      <StateSample />
      <input onChange={handleOnChange} />
      <Button disabled={name !== 'abc'} type="submit" size="sm">
        Hello
      </Button>
      <Button size="md">Hello</Button>
      <Button size="lg">Hello</Button>
    </div>
  )
}
