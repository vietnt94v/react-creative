interface IButton {
  // Basic
  children?: React.ReactNode
  label?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'solid' | 'outline'
  color?:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
  size?: 'small' | 'medium' | 'large'

  // Behavior
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void

  // State
  disabled?: boolean
  isLoading?: boolean
  isActive?: boolean

  // Advanced
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  style?: React.CSSProperties
}

export default IButton
