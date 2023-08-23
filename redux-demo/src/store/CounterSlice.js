
import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name:'counters',
    initialState: {
        count: 100
    },
    reducers: {
        //actions that can be performed to update the state
        //
        increment: (state, data) => {
            return { ...state, count: state.count + 1 }
        },
        reset: (state, data) => {
            return {...state,count:0}
        }
    }
});

export const { increment,reset } = CounterSlice.actions;
export default CounterSlice.reducer;