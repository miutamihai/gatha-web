import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attempt: null,
    observations: null,
    error: null,
}

const attempt = (state, {payload}) => ({...state, attempt: payload})
const success = (state, {payload}) => ({...state, observations: payload})
const failure = (state, {payload}) => ({...state, error: payload})
const reset = () => ({...initialState})

export const get = createSlice({
    initialState,
    name: 'getObservations',
    reducers: {
        attempt,
        success,
        failure,
        reset,
    },
})

export const { actions } = get