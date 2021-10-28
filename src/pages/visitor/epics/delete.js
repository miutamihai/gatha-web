import { actions } from '../slices/create'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories/index";
import { catchError } from "rxjs/operators";

export const remove = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => deleteVisitor(payload)))

const deleteVisitor = payload => repository.remove(payload)
    .pipe(mergeMap(actions.success))
    .pipe(catchError(actions.failure))