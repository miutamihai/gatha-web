import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableBody } from "@mui/material";

export const Body = ({ page, rowsPerPage, filtered, emptyRows, bodyColumns}) => {
    return (
        <TableBody>
            {filtered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                        <TableRow
                            hover
                            key={row.name}
                            tabIndex={-1}
                        >
                            {bodyColumns.map(column => {
                                return (
                                    <TableCell key={Math.random()}>{row[column.id]}</TableCell>
                                )
                            })}
                        </TableRow>
                    );
                })}
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6}/>
                </TableRow>
            )}
        </TableBody>
    )
}