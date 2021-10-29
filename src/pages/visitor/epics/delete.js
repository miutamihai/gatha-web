import { actions } from '../slices/delete'
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { repository } from "../repositories/index";
import { catchError } from "rxjs/operators";
import {map} from "rxjs/operators";
import {of} from "rxjs";

export const remove = action$ => action$.pipe(ofType(actions.attempt))
    .pipe(mergeMap(({ payload }) => deleteVisitor(payload)))

const deleteVisitor = payload => repository.remove(payload)
    .pipe(map(actions.success))
    .pipe(catchError(error => (of(actions.failure(error)))))