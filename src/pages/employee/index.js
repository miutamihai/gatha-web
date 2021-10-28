import Page from "../../components/Page";
import {Container, Grid, TextField, Typography} from "@mui/material";
import employeeData from '../../_mocks_/employee'
import {Box} from "@mui/material";
import {LoadingButton} from "@mui/lab";

const Employee = () => {
    const employee = employeeData;

    return (
        <Page title="Employee">
            <Container>
            <Grid container sx={{paddingLeft:'40px'}}>
                <Grid item xs={2}>
                    <Box alignContent='flex-start'>
                        <img src={'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg'} alt={'profile picture'}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
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
                    <Typography variant="h6" gutterBottom sx={{paddingTop: '50px'}}>
                        Observations:
                    </Typography>
                    <TextField
                        sx={{width: '100%'}}
                        fullWidth
                        multiline
                        defaultValue={employee.observations.description}
                    />
                    <Typography variant="h6" gutterBottom sx={{marginTop: '20px'}}>
                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Save observations
                        </LoadingButton>
                    </Typography>
                </Container>
                </Grid>
            </Grid>
            </Container>
        </Page>
    )
}

export default Employee;