import { createSlice } from '@reduxjs/toolkit';

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
    reducers:{}
})


export default customersSlice.reducer;