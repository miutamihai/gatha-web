import { combineEpics } from "redux-observable";
import { get } from './get'
import { remove } from './delete'
import { create } from './create'
import { update } from './update'

export const visitorEpics = combineEpics(
    get,
    remove,
    create,
    update
)