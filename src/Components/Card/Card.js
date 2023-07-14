import React from 'react'
import './Card.css'
// import { MdDeliveryDining } from "react-icons/md";
const Card = ({image,title,price,description}) => {
  return (
    <div className='card'>
      <div>
      <img src={image} alt='card-img' width="100%"/>
      </div>
      <div className='dish-info'>
      <div className='title'>
      <h1>{title}</h1>
      <h2>{price}</h2>
      </div>
      <p>{description}</p>
      <span
      role='button'
      aria-label='On Click'
      className='specials-order-btn'
      >
        order a delivery
        {/* <MdDeliveryDining
            size={30}
            style={{
              color: "#333",
              marginLeft: "15px",
              marginBottom: "-10px",
            }}
          /> */}
      </span>
    </div>
    </div>
  )
}

export default Card