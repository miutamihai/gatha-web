import { actions } from '../slices/create'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories/index";
import { catchError } from "rxjs/operators";

export const get = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => getVisitor(payload)))

const getVisitor = payload => repository.get(payload)
    .pipe(mergeMap(actions.success))
    .pipe(catchError(actions.failure))