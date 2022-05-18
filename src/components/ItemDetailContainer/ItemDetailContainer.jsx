import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const itemDetailContainer = {
  display: 'flex',
  justifyContent: 'center',
}

const ItemDetailContainer = (props) => {
  const [productList, setProductList] = useState(null)
  let {id} = useParams()

  useEffect(() => {
    fetch('https://sheet.best/api/sheets/7fb7056f-9fa0-43a5-b4a0-6a1630bf3cc3')
    .then(res => res.json())
    .then(res => setProductList(res))
    return () => {
    }
  }, [])
  
  return (
    <div className='itemDetailContainer' style={itemDetailContainer}>
        {productList != null ? (
          productList.filter(e => e.id == id).map(e => (
            <ItemDetail
            key = {e.id}
            item = {e}
            />
          ))
        ):(
          <ItemDetail
          item = {null}
          />
        )}
    </div>
  )
}

export default ItemDetailContainer