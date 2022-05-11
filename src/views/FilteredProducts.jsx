import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NavBar from '../components/NavBar/NabBar'

const filteredProductsContainer = {
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f7f5'
}

const FilteredProducts = (props) => {
    let {category} = useParams()

  return (
    <div className="filteredProductsContainer" style={filteredProductsContainer}>
      <ItemListContainer category = {category}/>
    </div>
  )
}

export default FilteredProducts