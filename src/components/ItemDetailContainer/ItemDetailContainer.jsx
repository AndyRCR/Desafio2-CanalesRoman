import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  return (
    <div className='itemDetailContainer itemDetailActive'>
        <div className='deathSpace'>
        </div>
        <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer