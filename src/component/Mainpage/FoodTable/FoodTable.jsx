import "./foodTable.css";
import { createData, rows, headCells } from "./data";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

export default function FoodTable() {
  const [page, setPage] = useState(0);
  const rowsperpage = 5;

  return (
    <>
      <div className="Top">
        <p className="Table-text">Ingredients:</p>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
        />
        <Button variant="contained">Search for Food Item</Button>
      </div>
      <div className="Table">
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%, mb: 2" }}>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} alia-labelledby="tableTitle">
                <TableHead>
                  <TableRow>
                    {headCells.map((headCells) => (
                      <TableCell
                        key={headCells.id}
                        padding={headCells.disablePadding ? "" : "normal"}
                      >
                        {headCells.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                      <TableCell align="center">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Box>
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </>
  );
}
