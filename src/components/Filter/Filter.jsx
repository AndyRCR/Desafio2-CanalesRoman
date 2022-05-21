import React, {useContext, useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext';
import { TextField } from '@mui/material';

const filterContainer = {
  width: '20%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  margin: '20px',
  backgroundColor: 'white',
  borderRadius: '20px'
}

const h3 = {
  textAlign: 'left',
  marginBottom: '20px'
}

const Filter = () => {
  const {productName, setProductName, category, setCategory} = useContext(GlobalContext)

  const handleChange = (event) => setCategory(event.target.value)

  const handleProductName = (event) => setProductName(event.target.value)

  return (
    <>
      <div className='filterContainer' style={filterContainer}>
        <h3 style={h3}>Filtrar:</h3>
        <FormControl fullWidth>
          <InputLabel id="categoryLabel">Categoría</InputLabel>
          <Select
            labelId="categoryLabel"
            id="categorySelect"
            value={category}
            label="category"
            onChange={handleChange}
          >
            <MenuItem component={Link} to='/' value={'*'}>Todas las categorías</MenuItem>
            <MenuItem component={Link} to='/category/accesorios' value={'accesorios'}>Accesorios</MenuItem>
            <MenuItem component={Link} to='/category/consolas' value={'consolas'}>Consolas</MenuItem>
            <MenuItem component={Link} to='/category/equiposdesonido' value={'equiposdesonido'}>Equipos de Sonido</MenuItem>
            <MenuItem component={Link} to='/category/impresoras' value={'impresoras'}>Impresoras</MenuItem>
            <MenuItem component={Link} to='/category/laptops' value={'laptops'}>Laptops</MenuItem>
            <MenuItem component={Link} to='/category/moviles' value={'moviles'}>Moviles</MenuItem>
            <MenuItem component={Link} to='/category/televisores' value={'televisores'}>Televisores</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <TextField
          id="productInput"
          name='productName'
          label="Filtrar por nombre"
          value={productName}
          onChange={handleProductName}
          style={{backgroundColor: 'white', marginTop: '20px'}}
          />
        </FormControl>
      </div>
    </>
  )
}

export default Filter