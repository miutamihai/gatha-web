import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attempt: null,
    error: null,
}

const attempt = (state, {payload}) => ({...state, attempt: payload})
const success = (state) => ({...state})
const failure = (state, {payload}) => ({...state, error: payload})
const reset = () => ({...initialState})

export const remove = createSlice({
    initialState,
    name: 'deleteDepartment',
    reducers: {
        attempt,
        success,
        failure,
        reset,
    },
})

export const { actions } = remove