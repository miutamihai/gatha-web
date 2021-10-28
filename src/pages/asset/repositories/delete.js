import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const remove = parameter => from(client.mutate({ mutation: removeQuery, variables: parameter, fetchPolicy: 'no-cache' }))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const removeQuery = gql`
    mutation deleteAsset($where: AssetWhere) {
        deleteAssets(where: $where) {
            nodesDeleted
            relationshipsDeleted
        }
    }
`