import React from 'react'

export interface IPopup {
  size?: 'sm' | 'md' | 'lg'
  title?: string
  message?: string
  onSubmit?: () => void
  onCancel?: () => void
  children?: React.ReactElement
}
