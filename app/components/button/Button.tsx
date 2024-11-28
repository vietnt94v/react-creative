import React from 'react'
import IButton from '../../models/Button'
import Spinner from '../icons/Spinner'

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
  isActive,
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

  const variantClassMap: Record<string, string> = {
    solid: '',
    outline: 'bg-transparent',
  }

  const colorClassMap: Record<string, string> = {
    gray: 'bg-gray-500 hover:bg-gray-300',
    red: 'bg-red-500 hover:bg-red-300',
    orange: 'bg-orange-500 hover:bg-orange-300',
    yellow: 'bg-yellow-500 hover:bg-yellow-300',
    green: 'bg-green-500 hover:bg-green-300',
    teal: 'bg-teal-500 hover:bg-teal-300',
    blue: 'bg-blue-500 hover:bg-blue-300',
    cyan: 'bg-cyan-500 hover:bg-cyan-300',
    purple: 'bg-purple-500 hover:bg-purple-300',
    pink: 'bg-pink-500 hover:bg-pink-300',
    accent: 'bg-accent-500 hover:bg-accent-300',
  }

  const sizeClassMap: Record<string, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-xl',
  }

  const getButtonClass = (variant: string, color: string) => {
    if (variant === 'outline') {
      const colorClassMapArray = colorClassMap[color].split(' ')
      const [backgound, hoverBackground] = colorClassMapArray
      const newBorderColor = backgound.replace('bg-', 'border-')
      const newTextColor = backgound.replace('bg-', 'text-')
      const newHoverColor = backgound.replace('bg-', 'hover:bg-').replace('-500', '-300')

      return `${newBorderColor} ${newHoverColor} ${newTextColor}`
    }
    return colorClassMap[color] || ''
  }

  const buttonClass = `px-4 py-2 rounded transition border ${getButtonClass(
    variant,
    color,
  )} ${sizeClassMap[size] ?? ''}`
  return (
    <button
      type={type}
      className={`${buttonClass} ${className ?? ''}`}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || isLoading}
      style={style}
    >
      {isLoading ? <Spinner /> : null} {content}
    </button>
  )
}

export default Button
