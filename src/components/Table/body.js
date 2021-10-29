import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableBody } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useCallback} from "react";

const useOnClick = () => {
    const navigate = useNavigate()
    
    return useCallback(id => {
        navigate(`/dashboard/employee/${id}`)
    },[navigate])
}

export const Body = ({ page, rowsPerPage, filtered, emptyRows, bodyColumns, clickable}) => {
   
    const onClick = useOnClick()
    
    return (
        <TableBody>
            {filtered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    console.log(row)
                    return (
                        <TableRow
                            hover
                            key={row.name}
                            tabIndex={-1}
                        >
                            {bodyColumns.map(column => {
                                return (
                                        <TableCell onClick={() => clickable && onClick(row.id)} key={Math.random()}>{row[column.id]}</TableCell>
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