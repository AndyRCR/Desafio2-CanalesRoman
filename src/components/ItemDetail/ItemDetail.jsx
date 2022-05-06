import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = () => {

  return (
    <div className='itemDetailC'>
      {/* <div className='buttonContainer'>
          <button>Add to cart</button>
      </div> */}
      <div className='product'>
          <img src='https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42701536-IHM2_BsM-medium.jpg'  alt="" />
          <div>
              <h3>Apple Iphone 13 Mini 128GB Midnight</h3>
              <h4>S/3,999</h4>
              <p className='stock'>(Stock: 57)</p>
              <p>APPLE - SMARTWATCH</p>
          </div>
          <ItemCount className = 'itemCount' amount = "57"></ItemCount>
      </div>
    </div>
  )
}

export default ItemDetail