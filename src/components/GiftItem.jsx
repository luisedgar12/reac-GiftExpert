import React from 'react'

const GiftItem = ({title,url}) => {

  return (
    <div>
    <img src={url} alt={title}></img>
    </div>
  )
}

export default GiftItem
