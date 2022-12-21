'use client'

import { useExample } from '@hooks/useExample'

export const StateSample = () => {
  const exampleCount = useExample((state) => state.count)
  const increase = useExample((state) => state.increase)

  return (
    <div>
      <main>Hello: Total Example {exampleCount}</main>
      <button onClick={() => increase(10)}>Increase</button>
    </div>
  )
}
