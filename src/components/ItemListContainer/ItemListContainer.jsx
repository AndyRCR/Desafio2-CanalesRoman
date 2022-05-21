import './ItemListContainer.css'
import React, {useEffect, useContext} from 'react'
import ItemList from '../ItemList/ItemList'
import Filter from '../Filter/Filter'
import { GlobalContext } from '../../context/GlobalStateContext'
import { db } from '../../service/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const {category} = useParams()
  const {productList, setProductList, productName} = useContext(GlobalContext)

  const getData = async () =>{
    const col = collection(db, 'products')
    try {
      const data = category === undefined ? await getDocs(col) : await getDocs(query(col, where('categoria', '==', category)))
      const res = data.docs.map(doc => doc = {id: doc.id, ...doc.data()} )
      setProductList(res.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase())))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    setProductList(null)
    getData()

    return () => {
    }
  }, [category, productName])

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