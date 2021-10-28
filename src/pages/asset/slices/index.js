import { combineReducers } from "@reduxjs/toolkit";

import { get } from './get'
import { update } from './update'
import { remove } from './delete'
import { create } from './create'

export const assetReducer = combineReducers({
    get: get.reducer,
    create: create.reducer,
    update: update.reducer,
    remove: remove.reducer,
})