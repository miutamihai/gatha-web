import { actions } from '../slices/create'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories";
import { catchError } from "rxjs/operators";

export const create = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => createDepartment(payload)))

const createDepartment = payload => repository.create(payload)
    .pipe(mergeMap(actions.success))
    .pipe(catchError(actions.failure))
