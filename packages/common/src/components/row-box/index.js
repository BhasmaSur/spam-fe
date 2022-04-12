import { Paper, Box, Grid,Typography, uuidv4 } from "@spammetwice/common";
import React from "react";

const RowBox = ({ rows, columns }) => {
  console.log(rows, columns);
  return (
    <Box p={1}>
      {rows.map((row) => {
        return (
          <Paper elevation={3} key={uuidv4()}>
            <Grid mt={1} p={1} container>
              {columns.map((col) => {
                return (
                  <>
                    <Grid textAlign="left" item xs={4} key={uuidv4()}>
                      <Typography variant="h6">{col.label} : </Typography>
                    </Grid>
                    <Grid mt={1} textAlign="left" item xs={8} key={uuidv4()}>
                      {row[col.id]}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default RowBox;
