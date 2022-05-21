import React, {useContext, useEffect, useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext';
import { Box, FormHelperText, TextField } from '@mui/material';

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
  const {
    productName, setProductName,
    category, setCategory,
    minVal, maxVal,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice} = useContext(GlobalContext)

  const [validPrice, setValidPrice] = useState(true)

  const handleChange = (event) => setCategory(event.target.value)

  const handleProductName = (event) => setProductName(event.target.value)

  const handleMaxPrice = (event) => setMaxPrice(event.target.value === "" ? Number.MAX_VALUE : parseFloat(event.target.value))

  const handleMinPrice = (event) => setMinPrice(event.target.value === "" ? 0 : parseFloat(event.target.value))

  const handleValidPrice = () => setValidPrice( minPrice <= maxPrice ? true : false )

  useEffect(() => {
    handleValidPrice()

    return () => {
      
    }
  }, [minPrice,maxPrice])
  

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
          autoComplete='off'
          value={productName}
          onChange={handleProductName}
          style={{backgroundColor: 'white', marginTop: '20px'}}
          />
        </FormControl>

        <div style={{display: 'flex', marginTop: '20px', flexDirection: 'column'}}>
          <Box style={{display: 'flex'}}>
            <Box display={'flex'} alignItems={'center'} marginX={'5px'}>
              <div>S/</div>
            </Box>

            <TextField
            type={'number'}
            InputProps={{ inputProps: { min: 0 } }}
            id="maxPriceInput"
            name='maxPrice'
            label="Precio min."
            value={minVal}
            onChange={handleMinPrice}
            style={{backgroundColor: 'white'}}
            />

            <Box display={'flex'} alignItems={'center'} marginX={'5px'}>
              <div>-</div>
            </Box>

            <Box display={'flex'} alignItems={'center'} marginX={'5px'}>
              <div>S/</div>
            </Box>

            <FormControl>
              <TextField
              type={'number'}
              InputProps={{ inputProps: { min: 1 } }}
              id="minPriceInput"
              name='minPrice'
              label="Precio max."
              value={maxVal}
              onChange={handleMaxPrice}
              style={{backgroundColor: 'white'}}
              />
            </FormControl>
          </Box>

          {!validPrice && <FormHelperText style={{color: 'red', textAlign: 'right'}}>Ingrese un filtro de precio valido</FormHelperText>}
          
        </div>
      </div>
    </>
  )
}

export default Filter