import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attempt: null,
    created: [],
    error: null,
}

const attempt = (state, {payload}) => ({...state, attempt: payload})
const success = (state, {payload}) => ({...state, created: payload})
const failure = (state, {payload}) => ({...state, error: payload})
const reset = () => ({...initialState})

export const create = createSlice({
    initialState,
    name: 'createUser',
    reducers: {
        attempt,
        success,
        failure,
        reset,
    },
})

export const { actions } = create