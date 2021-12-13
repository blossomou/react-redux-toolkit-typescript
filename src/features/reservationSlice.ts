import { createSlice } from '@reduxjs/toolkit';

const initalState = {
    value: []

}
export const reservationsSlice = createSlice({
    name: "reservations",
    initialState: initalState,
    reducers: {}
    
})

export default reservationsSlice.reducer;