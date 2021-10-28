import { actions } from '../slices/create'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories";
import { catchError } from "rxjs/operators";

export const update = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => updateAsset(payload)))

const updateAsset = payload => repository.update(payload)
    .pipe(mergeMap(actions.success))
    .pipe(catchError(actions.failure))