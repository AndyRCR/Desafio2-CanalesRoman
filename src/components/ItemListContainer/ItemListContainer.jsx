import './ItemListContainer.css'

import React from 'react'

const ItemListContainer = ({image, product, price, description}) => {
  return (
    <>
        <div className='itemContainer'>
            <div className='buttonContainer'>
                <button>Add to kart</button>
            </div>
            <div className='product'>
                <img src={image} alt="" />
                <div>
                    <h3>{product}</h3>
                    <h4>S/.{price}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemListContainer