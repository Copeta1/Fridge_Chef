import "./foodTable.css";
import { createData, rows, headCells } from "./data";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Paper, Table, TableContainer } from "@mui/material";

export default function FoodTable() {
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
              <Table
                sx={{ minWidth: 750 }}
                alia-labelledby="tableTitle"
              ></Table>
            </TableContainer>
          </Paper>
        </Box>
      </div>
    </>
  );
}
