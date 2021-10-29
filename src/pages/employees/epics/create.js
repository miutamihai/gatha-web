import { actions } from '../slices/create'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories/index";
import { catchError } from "rxjs/operators";
import {map} from "rxjs/operators";
import {of} from "rxjs";

export const create = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => createUser(payload)))

const createUser = payload => repository.create(payload)
    .pipe(map(actions.success))
    .pipe(catchError(error => (of(actions.failure(error)))))