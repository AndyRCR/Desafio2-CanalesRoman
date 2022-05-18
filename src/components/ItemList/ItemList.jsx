import './ItemList.css'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productList }) => {

  return (
    <>
        <div className='itemList'>
            {productList != null ? (
                productList.map((element,index) => (
                    <div key={'container' + element.id} className='itemFlexContainer'>
                        <Item
                        key = {element.id}
                        product = {element}
                        />
                    </div>
                ))
            ) : (
                <h1 className='loadingContainer'>
                    Cargando...
                </h1>
            )}
        </div>
    </>
  )
}

export default ItemList