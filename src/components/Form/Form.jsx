import { FormControl, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'

const Form = () => {
    const {cartProducts, totalPrice} = useContext(GlobalContext)
    const [formValue, setFormValue] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        products: cartProducts,
        totalPrice: totalPrice
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValue({
          ...formValue,
          [name]: value,
        })
    }

  return (
    <>
        <FormControl>
            <TextField
            id="nameInput"
            name='name'
            label="Nombres"
            value={formValue.name}
            onChange={handleInputChange}
            style={{backgroundColor: 'white'}}
            />
            <TextField
            id="lastNameInput"
            name='lastName'
            label="Apellidos"
            value={formValue.lastName}
            onChange={handleInputChange}
            style={{backgroundColor: 'white'}}
            />
            <TextField
            type={'email'}
            id="emailInput"
            label="Email"
            name='email'
            value={formValue.email}
            onChange={handleInputChange}
            style={{backgroundColor: 'white'}}
            />
            <TextField
            type={'password'}
            id="passwordInput"
            label="Contraseña"
            name='password'
            value={formValue.password}
            onChange={handleInputChange}
            style={{backgroundColor: 'white'}}
            />
        </FormControl>
    </>
  )
}

export default Form