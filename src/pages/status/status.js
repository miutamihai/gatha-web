import {useSelector} from "react-redux";
import Page from "../../components/Page";
import {Container} from "@mui/material";
import {Grid} from "@mui/material";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {Table} from "../../components/Table/index";

const headColumns = [
    { id: 'type', label: 'Type'},
    { id: 'description', label: 'Description'},
    { id: 'serialNumber', label: 'Serial number'},
    { id: 'superior', label: 'Superior'},
]

export const Status = () => {
    const employee = useSelector(selector)
    const hasAssigned = employee[0] ? employee[0]?.hasAssigned : []
    console.log(hasAssigned, 'cevaaa')
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
                                {employee[0]?.firstName} {employee[0]?.lastName}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{marginTop: '40px'}}>
                                Personal ID: {employee[0]?.personalId}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Phone: {employee[0]?.phone}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Email: {employee[0]?.email}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{paddingTop: '50px'}}>
                                Superior: {employee[0]?.createdBy?.firstName} {employee[0]?.createdBy?.lastName}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{paddingTop: '50px', textDecoration: 'underline'}}>
                                History
                            </Typography>
                            <Table headColumns={headColumns} data={hasAssigned}/>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

const selector = ({userReducer}) => userReducer.get.users;