import { actions } from '../slices/get'
import { ofType } from "redux-observable";
import { map, mergeMap} from "rxjs";
import { repository } from "../repositories/index";
import { catchError } from "rxjs/operators";
import {of} from "rxjs";

export const get = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => getUser(payload)))

const getUser = payload => repository.get(payload)
    .pipe(map(actions.success))
    .pipe(catchError(error => (of(actions.failure(error)))))