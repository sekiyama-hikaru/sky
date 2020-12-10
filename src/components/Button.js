import React from 'react'
export const Button = ({ onClick, title }) => {
  return (
    <button type={'button'} onClick={onClick}>
      {title}
    </button>
  )
}