import {useYesOrNo} from "../../hooks/useYesOrNo";
import Page from "../../components/Page";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {useSelector} from "react-redux";

export const Asset = () => {
    const asset = useSelector(selector)
    console.log(asset)
    const yesOrNo = useYesOrNo(asset[0]?.isAllowedToTakeOutside)

    return (
        <Page>
            <Container maxWidth={'md'}>
                <Typography variant="h3" gutterBottom sx={{marginTop: '10px'}}>
                    {asset[0]?.type}
                </Typography>
                <Typography variant="h4" gutterBottom sx={{marginTop: '10px', width: '50%'}}>
                    <img src={asset[0]?.picture} alt={'poza'}/>
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Description: {asset[0]?.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Serial Number: {asset[0]?.serialNumber}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px',paddingTop: '50px'}} >
                    Responsible: {asset[0]?.createdBy?.firstName} {asset[0]?.createdBy?.lastName}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Allowed to leave with: {yesOrNo}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginTop: '10px'}}>
                    Expected return: {asset[0]?.deadlineDate}
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

const selector = ({assetReducer}) => assetReducer.get.assets;
