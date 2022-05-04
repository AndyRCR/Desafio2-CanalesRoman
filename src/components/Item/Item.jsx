import './Item.css'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = (props) => {
  return (
    <>
        <div className='item'>
            {/* <div className='buttonContainer'>
                <button>Add to cart</button>
            </div> */}
            <div className='product'>
                <img src={props.image} alt="" />
                <div>
                    <h3>{props.product}</h3>
                    <h4>S/.{props.price}</h4>
                    <p className='stock'>(Stock: {props.stock})</p>
                    <p>{props.description}</p>
                </div>
                <ItemCount className = 'itemCount' amount = {props.stock}></ItemCount>
            </div>
        </div>
    </>
  )
}

export default Item