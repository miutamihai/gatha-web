import {useSelector} from "react-redux";
import {Behaviour} from "./behaviour";
import Page from "../../components/Page";
import {Container} from "@mui/material";
import {Card} from "@mui/material";
import {BlogPostsSort} from "../../components/_dashboard/blog/index";
import {Table} from "../../components/Table/index";
import React from "react";
import {flatten} from "lodash";

const headColumns = [
    { id: 'type', label: 'Type'},
    { id: 'name', label: 'Name'},
];

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];

export const Search = () => {
    const employee = useSelector(selector);
    
    const assetListForEmployees = employee.map(({hasAssigned, firstName, lastName}) => {
        const assetListForEmployee = hasAssigned.map(({type}) => ({
            type,
            name: `${firstName} ${lastName}`
        }))
        return assetListForEmployee;
    })
    
    const assetList = flatten(assetListForEmployees)
    
    return (
            <Page title="Search">
                <Container>
                    <Card>
                        <BlogPostsSort options={SORT_OPTIONS} defaultV/>
                        <Table headColumns={headColumns} data={assetList} searchEnabled/>
                    </Card>
                </Container>
            </Page>
    )
}

const selector = ({userReducer}) => userReducer.get.users;