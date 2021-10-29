import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { client } from "../../../start-up/client";
import { from } from "rxjs";

export const get = parameter => from(client.query({ query: getQuery, variables: parameter , fetchPolicy: 'no-cache' }))
    .pipe(map(response => response.data.departments))
    .pipe(catchError(error => throwError(error.networkError.result)))

export const getQuery = gql`
    query getDepartment($where: DepartmentWhere) {
        departments(where: $where) {
            id
            title
            description
            timestamp
            responsible {
                id
                companyId
                personalId
                firstName
                lastName
                email
                phone
            }
        }
    }
`