import Page from "../../components/Page";
import {Container} from "@mui/material";
import {Grid} from "@mui/material";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useSelector} from "react-redux";

export const Employee = () => {
    const employee = useSelector(selector);
    
    return (
        <Page title="Employee">
            <Container>
                <Grid container sx={{ paddingLeft:'40px' }}>
                    <Grid item xs={2}>
                        <Box alignContent='flex-start'>
                            <img src={employee[0]?.picture} alt={'profile picture'}/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
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
                            <Typography variant="h6" gutterBottom sx={{paddingTop: '50px'}}>
                                Observations:
                            </Typography>
                            <TextField
                                sx={{width: '100%'}}
                                fullWidth
                                multiline
                                defaultValue={employee[0]?.observations?.description}
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

const selector = ({ userReducer }) => userReducer.get.users;