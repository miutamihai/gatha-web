import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const update = parameter => from(client.mutate({ mutation: updateQuery, variables: parameter, fetchPolicy: 'no-cache' }))
    .pipe(map(response => response.data.updateAssets.assets))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const updateQuery = gql`
    mutation updateAsset($update: AssetUpdateInput, $where: AssetWhere) {
        updateAssets(update: $update, where: $where) {
            assets {
                id
                type
                serialNumber
                inventoryId
                title
                description
                picture
            }
        }
    }
`