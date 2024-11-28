import React from 'react'
import IInput from '../../models/Input'

const Input = ({
  className,
  id,
  value = '',
  placeholder = '',
  onChange,
  onEnter,
  onFocus,
  onBlur,
}: IInput) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter()
    }
  }
  return (
    <input
      className={`border border-gray-300 rounded px-4 py-2 ${className ?? ''}`}
      id={id}
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={e => onChange?.(e.target.value)}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

export default Input
