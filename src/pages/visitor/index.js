import { Container, TextField, Stack, Typography, Select, Chip, OutlinedInput, MenuItem} from "@mui/material";
import Page from "../../components/Page";
import * as Yup from "yup";
import { useFormik, FormikProvider, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import React from "react";
import user from '../../_mocks_/user'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const getResponibles = list => {
    const tempList = list.map(({firstName, lastName}) => ({
        fullName: `${firstName} ${lastName}`
    }))
    
    return tempList
}


const Visitor = () => {
    const navigate = useNavigate();
    const VisitorSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
    });
    const responsibles = user;
    const fullNames = getResponibles(responsibles);
    const [responsibleName, setResponsibleName] = React.useState('Select responsible');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            serialNumber: '',
            expectedDate: '',
        },
        validationSchema: VisitorSchema,
        onSubmit: () => {
            navigate('/dashboard', { replace: true });
        }
    });

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setResponsibleName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
    
    return (
        <Page>
            <Container maxWidth={'md'}>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                First Name*
                            </Typography>
                            <TextField
                                sx={{width: '70%'}}
                                label="First name"
                                {...getFieldProps('firstName')}
                                error={Boolean(touched.firstName && errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                Last Name*
                            </Typography>
                            <TextField
                                sx={{width: '70%'}}
                                label="Last name"
                                {...getFieldProps('lastName')}
                                error={Boolean(touched.lastName && errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                Serial Number
                            </Typography>
                            <TextField
                                sx={{width: '70%'}}
                                label="Serial number"
                                {...getFieldProps('serialNumber')}
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                Expected date
                            </Typography>
                            <TextField
                                sx={{width: '70%'}}
                                label="Expected date"
                                {...getFieldProps('serialNumber')}
                            />
                        </Stack>

                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                Responsible
                            </Typography>
                            <Select
                                sx={{width: '70%'}}
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                value={responsibleName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                            <Chip key={selected} label={selected} />
                                )}
                                MenuProps={MenuProps}
                            >
                                {fullNames.map((name) => (
                                    <MenuItem
                                        key={name.fullName}
                                        value={name.fullName}
                                    >
                                        {name.fullName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Stack>

                        <Stack direction={'column'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'left', paddingLeft: '10px'}}>
                                Observations:
                            </Typography>
                            <TextField
                                sx={{width: '100%'}}
                                fullWidth
                                multiline
                            />
                        </Stack>
                        
                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            loading={isSubmitting}
                            onSubmit={() => null}
                        >
                            Submit visit
                        </LoadingButton>
                    </Form>
                </FormikProvider>
            </Container>
        </Page>
    )
}

export default Visitor;