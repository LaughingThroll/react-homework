import React from 'react'



const Button = ({ className = [], onClick = (() => { }), children }: any) => {
  return (
    <button className={`button ${className.join(' ')}`} onClick={onClick}>{children}</button>
  )
}

export default Button
