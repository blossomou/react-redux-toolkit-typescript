import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservationState{
    value: string[]
}
const initalState: ReservationState = {
    value: []

}
export const reservationsSlice = createSlice({
    name: "reservations",
    initialState: initalState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) =>{
            state.value.push(action.payload)
        },
        removeReservation:(state, action: PayloadAction<number>) =>{
            state.value.splice(action.payload, 1)
        }
    }
    
})

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;