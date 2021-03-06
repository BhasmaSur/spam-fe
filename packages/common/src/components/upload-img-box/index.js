import React from "react";
import { Box, Button, Grid, IconButton, DeleteIcon } from "@spammetwice/common";
const UploadImageBox = ({handleChange,handleDelete,itemNumber}) => {
  const fileSelectedHandler = () => {};
  const uploadFile = () => {};
  return (
    <Grid container>
      <Grid
        item
        xs={10}
        sm={11}
        sx={{
          border: "solid grey",
          borderRadius: "5px",
          paddingTop: 1.5,
          paddingBottom: 1.5,
        }}
      >
        <input type="file" onChange={fileSelectedHandler} />
        <Button size="small" variant="contained" onClick={uploadFile}>
          Upload
        </Button>
      </Grid>
      <Grid item xs={2} sm={1}>
        <Box mt={3} ml={1}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={()=>handleDelete(itemNumber)}
          >
            <DeleteIcon/>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UploadImageBox;
