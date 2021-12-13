import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState{

    value: Customer[]
}
interface Customer{
    id: string;
    name: string;
    food: string[];
}

const initialState : CustomerState = {
    value: []
}
export const customersSlice = createSlice({
    name: "customers",
    initialState: initialState,
    reducers:{
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        }
    }
})

export const {addCustomer} = customersSlice.actions;
export default customersSlice.reducer;