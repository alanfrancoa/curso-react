import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeEmail } from '../redux/productSlice'

const Email = () => {
    const dispatch = useDispatch()
    const email = useSelector((state)=> state.user.email)
    const handleChange = (e) => {
        
    }
  return (
    <input type="email" value={email} name="" id="" placeholder='Email' onChange={handleChange} />
  )
}

export default Email