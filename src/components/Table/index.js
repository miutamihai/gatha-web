import Search from "./search";
import Header from "./header"
import Scrollbar from "../Scrollbar";
import {
    Card,
    Table as MuiTable,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
} from '@mui/material';
import SearchNotFound from "../SearchNotFound";
import { filter } from "lodash";
import { useState } from "react";
import { Body } from "./body";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export const Table = ({ headColumns, data, searchEnabled, clickable}) => {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [filter, setFilter] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const filtered = applySortFilter(data, getComparator(order, orderBy), filter);

    const isNotFound = filtered.length === 0;
    
    return (
            <Card>
                {searchEnabled && <Search filter={filter}
                                          onFilter={handleFilter}/>
                }
                <Scrollbar>
                    <TableContainer>
                        <MuiTable>
                            <Header order={order}
                                    orderBy={orderBy}
                                    headLabel={headColumns}
                                    rowCount={data.length}
                                    onRequestSort={handleRequestSort} />
                            <Body emptyRows={emptyRows}
                                  filtered={filtered}
                                  page={page}
                                  rowsPerPage={rowsPerPage}
                                  bodyColumns={headColumns}
                                  clickable/>
                            {isNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                            <SearchNotFound searchQuery={filter} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </MuiTable>
                    </TableContainer>
                </Scrollbar>
        
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{paddingTop: '20px'}}
                />
            </Card>
    )
}