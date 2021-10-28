import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attempt: null,
    updated: null,
    error: null,
}

const attempt = (state, {payload}) => ({...state, attempt: payload})
const success = (state, {payload}) => ({...state, updated: payload})
const failure = (state, {payload}) => ({...state, error: payload})
const reset = () => ({...initialState})

export const update = createSlice({
    initialState,
    name: 'updateUser',
    reducers: {
        attempt,
        success,
        failure,
        reset,
    },
})

export const { actions } = update