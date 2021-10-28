import Page from "../../components/Page";
import { Container, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import assetData from '../../_mocks_/asset'
import { useYesOrNo } from "../../hooks/useYesOrNo";

const Asset = () => {
    const asset = assetData
    const yesOrNo = useYesOrNo(asset.isAllowedToTakeOutside)
    
    return (
        <Page>
            <Container maxWidth={'md'}>
                <Typography variant="h3" gutterBottom sx={{marginTop: '10px'}}>
                    {asset.type}
                </Typography>
                <Typography variant="h4" gutterBottom sx={{marginTop: '10px'}} sx={{width: '50%'}}>
                    <img src={'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80'} alt={'poza'}/>
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}> 
                    Description: {asset.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Serial Number: {asset.serialNumber}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}} sx={{paddingTop: '50px'}}>
                    Responsible: {asset.responsible.firstName} {asset.responsible.lastName}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Allowed to leave with: {yesOrNo}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Expected return: {asset.deadlineDate}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Mark presented on leave
                    </LoadingButton>
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Mark presented on leave
                    </LoadingButton>
                </Typography>
            </Container>
        </Page>
    )
}

export default Asset;