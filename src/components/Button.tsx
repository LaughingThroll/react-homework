import React, { ReactElement } from 'react'

interface IButton {
  className?: string[],
  onClick?: (е: React.MouseEvent) => void,
  children?: string | ReactElement
} 

const Button = ({ className = [], onClick, children }: IButton) => {
  return (
    <button className={`button ${className.join(' ')}`} onClick={onClick}>{children}</button>
  )
}

export default Button
