import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const {ID, description, stock, price} = action.payload
            state.products.push({ ID, description, stock, price });
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    }

})

export const {addProduct, changeEmail} = productSlice.actions
export default productSlice.reducer