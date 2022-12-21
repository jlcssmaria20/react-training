import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface ExampleState {
  count: number
  increase: (by: number) => void
}

export const useExample = create<ExampleState>()(
  devtools(
    (set) => ({
      count: 0,
      increase: (by) => set((state) => ({ count: state.count + by })),
    }),
    {
      name: 'example-storage',
    }
  )
)
