import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import "./Table.css";

const BmiTable = ({ bmi }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="tableContainer">
      
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableHeaderCell">Name</TableCell>
              <TableCell className="tableHeaderCell">Weight (KG)</TableCell>
              <TableCell className="tableHeaderCell">Height (cm)</TableCell>
              <TableCell className="tableHeaderCell">Gender</TableCell>
              <TableCell className="tableHeaderCell">BMI</TableCell>
              <TableCell className="tableHeaderCell">Risk</TableCell>
            </TableRow>
        </TableHead>
          <TableBody>
            {bmi
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Typography className="name">{row.first_name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.weightKg}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.height}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>{row.gender}</Typography>
                  </TableCell>
                  <TableCell>{row.bmiValue}</TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.risk}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={bmi.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
    </TableContainer>
  );
};

export default BmiTable;
