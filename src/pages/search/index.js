import React from 'react';
import Page from "../../components/Page";
import { Container, Card } from "@mui/material";
import { Table } from "../../components/Table/index";
import mockedData from '../../_mocks_/data'
import { BlogPostsSort } from "../../components/_dashboard/blog/index";


const headColumns = [
    { id: 'type', label: 'Type'},
    { id: 'name', label: 'Name'},
];

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];

const Search = () => {
    const data = mockedData();
    
    return (
        <Page title="Search">
            <Container >
                <Card>
                    <BlogPostsSort options={SORT_OPTIONS} />
                    <Table headColumns={headColumns} data={data} searchEnabled/>
                </Card>
            </Container>
        </ Page>
    )
}

export default Search;
