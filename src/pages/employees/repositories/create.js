import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const create = parameter => from(client.mutate({ mutation: createQuery, variables: parameter, fetchPolicy: 'no-cache' }))
    .pipe(map(response => response.data.createUsers.users))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const createQuery = gql`
    mutation createUser($input: [UserCreateInput!]!) {
        createUsers(input: $input) {
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