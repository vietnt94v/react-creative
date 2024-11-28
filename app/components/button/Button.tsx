import React from 'react'
import IButton from '../../models/Button'

const Button: React.FC<IButton> = ({
  children,
  label,
  className,
  type = 'button',
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  onClick,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  disabled,
  isLoading,
  icon,
  iconPosition = 'left',
  style,
}) => {
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className='me-1'>{icon}</span>}
      {children ?? label}
      {icon && iconPosition === 'right' && <span className='ms-1'>{icon}</span>}
    </>
  )

  const colorClassMap: Record<string, Record<string, string>> = {
    solid: {
      gray: 'text-black bg-gray-500 hover:bg-gray-600 disabled:text-gray-500/50 disabled:bg-gray-500',
      red: 'text-white bg-red-500 hover:bg-red disabled:text-red-500/50 500 disabled:bg-red-600',
      orange:
        'text-black bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500',
      yellow:
        'text-black bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-500',
      green: 'text-white bg-green-500 hover:bg-green-600 disabled:bg-green-500',
      teal: 'text-white bg-teal-500 hover:bg-teal-600 disabled:bg-teal-500',
      blue: 'text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500',
      cyan: 'text-white bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500',
      purple:
        'text-white bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500',
      pink: 'text-white bg-pink-500 hover:bg-pink-600 disabled:bg-pink-500',
    },
    outline: {
      gray: 'text-gray-500 border-gray-500 hover:bg-gray-600/25 disabled:hover:bg-transparent',
      red: 'text-red-500 border-red-500 hover:bg-red-600/25 disabled:hover:bg-transparent',
      orange:
        'text-orange-500 border-orange-500 hover:bg-orange-600/25 disabled:hover:bg-transparent',
      yellow:
        'text-yellow-500 border-yellow-500 hover:bg-yellow-600/25 disabled:hover:bg-transparent',
      green:
        'text-green-500 border-green-500 hover:bg-green-600/25 disabled:hover:bg-transparent',
      teal: 'text-teal-500 border-teal-500 hover:bg-teal-600/25 disabled:hover:bg-transparent',
      blue: 'text-blue-500 border-blue-500 hover:bg-blue-600/25 disabled:hover:bg-transparent',
      cyan: 'text-cyan-500 border-cyan-500 hover:bg-cyan-600/25 disabled:hover:bg-transparent',
      purple:
        'text-purple-500 border-purple-500 hover:bg-purple-600/25 disabled:hover:bg-transparent',
      pink: 'text-pink-500 border-pink-500 hover:bg-pink-600/25 disabled:hover:bg-transparent',
    },
  }

  const sizeClassMap: Record<string, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }

  const getButtonClass = (variant: string, color: string, size: string) => {
    const colorMixClasses = colorClassMap[variant]?.[color] || ''
    const sizeClasses = sizeClassMap[size] || ''
    return `${colorMixClasses} ${sizeClasses} px-4 py-2 border rounded disabled:opacity-50 transition`
  }

  const buttonClass = `${getButtonClass(variant, color, size)} ${
    className || ''
  }`

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || isLoading}
      style={style}
    >
      {isLoading ? 'Loading...' : content}
    </button>
  )
}

export default Button
