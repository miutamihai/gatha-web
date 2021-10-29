import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attempt: null,
    users: [],
    error: null,
}

const attempt = (state, {payload}) => ({...state, attempt: payload})
const success = (state, {payload}) => ({...state, users: payload})
const failure = (state, {payload}) => ({...state, error: payload})
const reset = () => ({...initialState})

export const get = createSlice({
    initialState,
    name: 'getUsers',
    reducers: {
        attempt,
        success,
        failure,
        reset,
    },
})

export const { actions } = get