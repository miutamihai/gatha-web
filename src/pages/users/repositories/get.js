import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const get = parameter => from(client.query({ query: getQuery, variables: parameter , fetchPolicy: 'no-cache' }))
    .pipe(map(response => response.data.users))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const getQuery = gql`
    query getUser($where: UserWhere) {
        users(where: $where) {
            entityId
            personalId
            companyId
            firstName
            lastName
            email
            phone
            picture
            timestamp
            department {
                entityId
                title
                description
            }
            observations {
                entityId
                description
            }
        }
    }
`