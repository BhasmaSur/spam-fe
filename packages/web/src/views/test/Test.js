import { Autocomplete, Divider, Grid, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from "@mui/material";
import { fakeHttpRequests, LoadingScreen, SearchIcon } from "@spammetwice/common";
import React, { useState, useEffect } from "react";

import ClearIcon from "@mui/icons-material/Clear";

function Test() {
  const [questionData, setQuestionData] = useState([]);
  const fetchQuestionData = async () => {
    const result = await fakeHttpRequests();
    setQuestionData(result.description);
    console.log(result.description);
  };
  useEffect(() => {
    fetchQuestionData();
  }, []);

  return (
    <div>

    <Paper
      elevation={1}
      component="form"
      sx={{ p: "1px 1px", display: "flex", alignItems: "center", width: 400 }}
      >
      <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, textSizeAdjust: 1 }}
        placeholder="Search any Spam!"
        inputProps={{ }}
      />
      <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
        <ClearIcon />
      </IconButton>
    </Paper>

    <List  sx={{ marginLeft: "30px",    width: '100%', maxWidth: 370, bgcolor: 'background.paper' }}>
      
    <ListItemButton>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
      </ListItemButton>
      <Divider variant="middle" component="li" />
      <ListItemButton>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Brunch this weekend? ...................asdsa dsadasdsadas dasdsadsa sadasdas asdasdsa asd asdas asd " />
      </ListItem>
      </ListItemButton>
      <Divider variant="middle" component="li" />
    </List>

    
    
    </div>
  );
}

export default Test;
