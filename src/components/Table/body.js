import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableBody } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    cell: {
        paddingLeft: '20%'
    }
})

export const Body = ({ page, rowsPerPage, filtered, emptyRows}) => {
    const classes = useStyles();
    return (
        <TableBody>
            {filtered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    const { id, type, name} = row;

                    return (
                        <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                        >
                            <TableCell className={classes.cell} sx={{width: '50%'}}>{type}</TableCell>
                            <TableCell className={classes.cell}>{name}</TableCell>
                        </TableRow>
                    );
                })}
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} className={classes.cell}/>
                </TableRow>
            )}
        </TableBody>
    )
}