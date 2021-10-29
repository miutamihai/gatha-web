import { actions } from '../slices/get'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories";
import { catchError } from "rxjs/operators";
import {map} from "rxjs/operators";
import {of} from "rxjs";

export const get = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => getAssetAssignment(payload)))

const getAssetAssignment = payload => repository.get(payload)
    .pipe(map(actions.success))
    .pipe(catchError(error => (of(actions.failure(error)))))