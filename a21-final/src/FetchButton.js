import React from 'react'

const FetchButton = ({ callback, text }) => {
  return (
    <button onClick={callback}>{text}</button>
  )
}

export default FetchButton
