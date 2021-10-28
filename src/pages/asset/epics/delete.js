import { actions } from '../slices/create'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories";
import { catchError } from "rxjs/operators";

export const remove = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => deleteAsset(payload)))

const deleteAsset = payload => repository.remove(payload)
    .pipe(mergeMap(actions.success))
    .pipe(catchError(actions.failure))