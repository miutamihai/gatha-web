import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

BlogPostsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

const useStyles = makeStyles ({
  sort: {
  paddingTop: '3px', 
  paddingLeft: '25px',
    '& .css-ij9k62-MuiInputBase-root-MuiOutlinedInput-root': {
      borderRadius: '10%'
    },
    '& .css-ij9k62-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
    borderColor: 'black',
      borderWidth: '3px'
    },
    '& .css-ij9k62-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: 'black',
    }
  },
})

export default function BlogPostsSort({ options, onSort }) {
  const classes = useStyles()
  
  return (
    <TextField select size="big" value="latest" onChange={onSort} className={classes.sort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
