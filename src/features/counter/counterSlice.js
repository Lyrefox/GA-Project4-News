import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: [],
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(action.payload)
            const item = JSON.stringify(action.payload[0])
            console.log(item)
            // const result = [...state.value, item]
            // state.value += [item]
            const result = [...state.value, item]
            state.value = result
            console.log(state.value)
            // console.log(JSON.parse(state.value))
            // console.log(JSON.stringify(state.value))
            state.value.map((item, index) => (
                console.log(JSON.parse(item))
            ))
        },
        removeByIndex: (state, action) => {

        },
        setStateValue: (state, action) => {
            console.log(action)
            state.value = action.payload
        }
    },
})

export const { increment, decrement, incrementByAmount, setStateValue } = counterSlice.actions

export default counterSlice.reducer