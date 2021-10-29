import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const update = parameter => from(client.mutate({ mutation: updateQuery, variables: parameter, fetchPolicy: 'no-cache' }))
    .pipe(map(response => response.data.updateUsers.users))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const updateQuery = gql`
    mutation updateUser($update: UserUpdateInput) {
        updateUsers(update: $update) {
            users {
                id
                personalId
                companyId
                firstName
                lastName
                email
                phone
                picture
                timestamp
                department {
                    id
                }
            }
        }
    }
`