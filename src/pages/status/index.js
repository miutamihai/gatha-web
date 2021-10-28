import Page from "../../components/Page";
import {Container, Box, Grid, Typography} from "@mui/material";
import emplyeeData from '../../_mocks_/employee'
import assetAssignmentData from '../../_mocks_/assetAssignment'
import { Table } from "../../components/Table/index";

const headColumns = [
    { id: 'type', label: 'Type'},
    { id: 'name', label: 'Name'},
    { id: 'serialNumber', label: 'Serial number'},
    { id: 'startDate', label: 'Start date'},
    { id: 'deadlineDate', label: 'Deadline date'},
    { id: 'superior', label: 'Superior'},
]

const Status = () => {
    const employee = emplyeeData;
    const tempAssetAssigment = assetAssignmentData;
    
    const assetAssigment = tempAssetAssigment.map(({createdBy, ...rest}) =>({
        superior: `${createdBy.firstName} ${createdBy.lastName}`,
        createdBy,
        ...rest,
    }));
    
    const activeAssetAssigment = assetAssigment.filter(asset => asset.returnDate).map(({deadlineDate, startDate, ...rest}) => ({
        startDate: startDate.toDateString(),
        deadlineDate: deadlineDate.toDateString(),
        ...rest,
    }))

    const historyAssetAssigment = assetAssigment.filter(asset => !asset.returnDate).map(({deadlineDate, startDate, ...rest}) => ({
        startDate: startDate.toDateString(),
        returnDate: deadlineDate.toDateString(),
        ...rest,
    }))


    return (
        <Page title={'Status'}>
            <Container>
                <Grid container sx={{paddingLeft: '40px'}}>
                    <Grid item xs={2}>
                        <Box alignContent='flex-start'>
                            <img src={'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg'}
                                 alt={'profile picture'}/>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Container>
                            <Typography variant="h4" gutterBottom>
                                {employee.firstName} {employee.lastName}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{marginTop: '40px'}}>
                                Personal ID: {employee.personalId}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Phone: {employee.phone}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Email: {employee.email}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{paddingTop: '50px'}}>
                                Superior: {employee.createdBy.firstName} {employee.createdBy.lastName}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{paddingTop: '50px', textDecoration: 'underline'}}>
                                Active
                            </Typography>
                            <Table headColumns={headColumns} data={activeAssetAssigment}/>
                            <Typography variant="h6" gutterBottom sx={{paddingTop: '50px', textDecoration: 'underline'}}>
                                History
                            </Typography>
                            <Table headColumns={headColumns} data={historyAssetAssigment}/>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default Status;