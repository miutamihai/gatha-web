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
    position: 'absolute',
    top: '12%',
    left: '25%',
  },
  item:{
    borderRadius: '60%'
  }
})

export default function BlogPostsSort({ options, onSort }) {
  const classes = useStyles()
  
  return (
    <TextField select size="big" value="latest" onChange={onSort} className={classes.sort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value} className={classes.item}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
