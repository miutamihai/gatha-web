import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import user from "../../_mocks_/user";
import React from "react";
import {useFormik} from "formik";
import Page from "../../components/Page";
import {Container} from "@mui/material";
import {FormikProvider} from "formik";
import {Form} from "formik";
import {Stack} from "@mui/material";
import {Typography} from "@mui/material";
import {TextField} from "@mui/material";
import {Select} from "@mui/material";
import {OutlinedInput} from "@mui/material";
import {Chip} from "@mui/material";
import {MenuItem} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useDispatch} from "react-redux";
import { actions } from './slices/create'

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

export const Visitor = () => {
    const employee = useSelector(selector)
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const VisitorSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
    });
    const fullNames = getResponibles(employee);
    const [responsibleName, setResponsibleName] = React.useState('Select responsible');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            personalId: '',
            phone: '',
            email: '',
            responsible: ''
        },
        validationSchema: VisitorSchema,
        onSubmit: () => {
            const names = formik?.values?.responsible?.split(' ')
            const input = { ...formik.values, responsible:{connect:{ where:{firstName: names[0], lastName: names[1]}}}}
            console.log(input,'input')
            dispatch(actions.attempt({input}))
            navigate('/dashboard/app')
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
                                {...getFieldProps('personalId')}
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                Phone
                            </Typography>
                            <TextField
                                sx={{width: '70%'}}
                                label="Phone"
                                {...getFieldProps('phone')}
                            />
                        </Stack>

                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} sx={{paddingBottom: '20px'}}>
                            <Typography variant='h5' sx={{alignSelf: 'center', paddingLeft: '10px'}}>
                                Email
                            </Typography>
                            <TextField
                                sx={{width: '70%'}}
                                label="Email"
                                {...getFieldProps('email')}
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
                                {...getFieldProps('responsible')}
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
                        >
                            Submit visit
                        </LoadingButton>
                    </Form>
                </FormikProvider>
            </Container>
        </Page>
    )
}

const selector = ({userReducer}) => userReducer.get.users;