import { actions } from '../slices/update'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories";
import { catchError } from "rxjs/operators";
import {map} from "rxjs/operators";
import {of} from "rxjs";

export const update = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => updateUser(payload)))

const updateUser = payload => repository.update(payload)
    .pipe(map(actions.success))
    .pipe(catchError(error => (of(actions.failure(error)))))