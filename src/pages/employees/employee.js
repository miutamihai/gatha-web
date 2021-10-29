import {useSelector} from "react-redux";
import Page from "../../components/Page";
import {Container} from "@mui/material";
import {Card} from "@mui/material";
import {Table} from "../../components/Table/index";
import React from "react";

const headColumns = [
    { id: 'firstName', label: 'First name'},
    { id: 'lastName', label: 'Last name'},
];

export const Employee = () => {
    const employee = useSelector(selector);

    return (<Page>
        <Container>
            <Card>
                <Table headColumns={headColumns} data={employee} searchEnabled clickable/>
            </Card>
        </Container>
    </Page>)
}

const selector = ({userReducer}) => userReducer.get.users;