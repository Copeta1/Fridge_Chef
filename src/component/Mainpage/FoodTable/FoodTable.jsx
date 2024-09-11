import "./foodTable.css";
import { rows, headCells } from "./data";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

export default function FoodTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < Math.ceil(rows.length / rowsPerPage) - 1) {
      setPage(page + 1);
    }
  };

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(rowId)
        ? prevSelectedRows.filter((id) => id !== rowId)
        : [...prevSelectedRows, rowId]
    );
  };

  const handleUncheckAll = () => {
    setSelectedRows([]);
  };

  const filteredRows = rows.filter((rows) =>
    rows.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displaypage = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <div className="Top">
        <p className="Table-text">Ingredients:</p>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(0);
          }}
        />
        <Button variant="contained">Search for Food Item</Button>
      </div>
      <div className="Table">
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%, mb: 2" }}>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <IconButton onClick={handleUncheckAll}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    {headCells.map((headCell) => (
                      <TableCell key={headCell.id}>{headCell.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displaypage.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleCheckboxChange(row.id)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Box
            sx={{
              display: "flex",
              p: 2,
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>
              page {page + 1} of {totalPages}
            </Typography>
            <IconButton onClick={handlePrevPage} disabled={page === 0}>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNextPage}
              disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </>
  );
}
