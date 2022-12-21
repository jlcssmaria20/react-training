import clsx from 'clsx'
import React from 'react'

export type ButtonTypes = 'button' | 'reset' | 'submit'
export type Sizes = 'sm' | 'md' | 'lg'
export type ExtraSizes = 'xs' | 'xl'

interface ButtonProps {
  type?: ButtonTypes
  onClick?: () => void
  size?: Sizes | ExtraSizes
  disabled?: boolean
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  type = 'button',
  size = 'sm',
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        size === 'sm' && 'prose-sm px-2.5 py-1.5',
        size === 'md' && 'prose-md px-4 py-2',
        size === 'lg' && 'prose-lg px-6 py-3'
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
