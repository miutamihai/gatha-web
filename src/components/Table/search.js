import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import { styled } from '@mui/material/styles';
import {
    Box,
    Toolbar,
    OutlinedInput,
    InputAdornment
} from '@mui/material';

const RootStyle = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: '50%',
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': { width: '100%', boxShadow: theme.customShadows.z8, borderColor: { }},
    '& fieldset': {
        borderWidth: `2px !important`,
        borderColor: `black !important`
    }
}));

// ----------------------------------------------------------------------

Search.propTypes = {
    numSelected: PropTypes.number,
    filterName: PropTypes.string,
    onFilterName: PropTypes.func
};

export default function Search({ filter, onFilter }) {
    return (
        <RootStyle>
            <SearchStyle
                value={filter}
                onChange={onFilter}
                placeholder="Search..."
                startAdornment={
                    <InputAdornment position="start">
                        <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                }
            />
        </RootStyle>
    );
}
