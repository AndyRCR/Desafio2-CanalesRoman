import './ItemListContainer.css'
import React, {useEffect, useContext} from 'react'
import ItemList from '../ItemList/ItemList'
import Filter from '../Filter/Filter'
import { GlobalContext } from '../../context/GlobalStateContext'

const ItemListContainer = (props) => {
  const {productList, setProductList} = useContext(GlobalContext)

  useEffect(() => {
    fetch('https://sheet.best/api/sheets/68763914-9c61-406f-9b36-7f12e8cd18cf')
    .then(res => res.json())
    .then(res => {
      props.category == null ? setProductList(res) : setProductList(res.filter(e => e.categoria === props.category))
    })
    .catch(err => console.log(err))

    return () => {
    }
  }, [props.category])

  return (
    <>
      <div className='itemListContainer'>
        <Filter></Filter>
        <div className='itemListGeneralContainer'>
          <h2>Lista de productos</h2>
          <ItemList productList={productList} />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer