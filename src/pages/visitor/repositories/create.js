import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const create = parameter => from(client.mutate({ mutation: createQuery, variables: parameter, fetchPolicy: 'no-cache' }))
    .pipe(map(response => response.data.createVisitors.visitors))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const createQuery = gql`
    mutation createVisitors($input: [VisitorCreateInput!]!) {
        createVisitors(input: $input) {
            visitors {
                id
                firstName
                lastName
                personalId
                phone
                email
                responsible {
                    firstName
                    lastName
                }
            }
        }
    }
`