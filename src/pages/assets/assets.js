import {useSelector} from "react-redux";
import Page from "../../components/Page";
import {Container} from "@mui/material";
import {Card} from "@mui/material";
import {Table} from "../../components/Table/index";
import React from "react";

const headColumns = [
    { id: 'type', label: 'Type'},
    { id: 'description', label: 'Description'},
    { id: 'serialNumber', label: 'Serial number'},
];

export const Assets = () => {
    const assets = useSelector(selector);

    return (<Page>
        <Container>
            <Card>
                <Table headColumns={headColumns} data={assets} searchEnabled clickable path='/asset'/>
            </Card>
        </Container>
    </Page>)
}

const selector = ({assetReducer}) => assetReducer.get.assets;