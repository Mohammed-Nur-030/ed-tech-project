import React from 'react'

const IconButton = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type
}) => {
  return (
    <buttom disabled={disabled}
    onClick={onclick}
    type={type}>
      {
        children? (
        <>
        <span>
            {text}
        </span>
        {
            children
        }
        </>
        ):(text)
      }
    </buttom>
  )
}

export default IconButton
