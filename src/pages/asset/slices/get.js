import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attempt: null,
    assets: null,
    error: null,
}

const attempt = (state, {payload}) => ({...state, attempt: payload})
const success = (state, {payload}) => ({...state, assets: payload})
const failure = (state, {payload}) => ({...state, error: payload})
const reset = () => ({...initialState})

export const get = createSlice({
    initialState,
    name: 'getAssets',
    reducers: {
        attempt,
        success,
        failure,
        reset,
    },
})

export const { actions } = get