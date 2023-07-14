import React from 'react'

const Testimony = ({image,name,description}) => {
  return (
    <div className='test'>
        <div><img src={image} alt='rating'/></div>
        <div><h5>{name}</h5></div>
        <div><p>{description}</p></div>
    </div>
  )
}

export default Testimony;