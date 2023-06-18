import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BoxCard({ title, boxList }) {
  return (
    <Card variant="outlined" sx={{ mb: 4, "&:last-child ": { mb: 0 } }}>
      <TableContainer sx={{ backgroundColor: "#f9f9f9" }}>
        <Table aria-label="simple table">
          {title && (
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" component="h3">
                    {title}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {boxList.map((row) => (
              <TableRow
                key={row.text}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.text}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
