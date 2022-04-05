import React from "react";
import { Box, Typography } from "@spammetwice/common";
import { makeStyles, Grid } from "@spammetwice/common";
import { fontSize } from "@mui/system";

const data = {
  title: "What are the most viewed questions on Quora?",
  description:
    "Learn electric vehicle development from scratch. Work on 25+ projects. Get lifetime job assistance.",
};

export default function SpamTemplate({ props }) {
  const { heading, description } = props;
  // console.log(props)
  return (
    <Grid container>
      <Grid item sm={1} xs={0}></Grid>
      <Grid item sm={7} xs={11}>
        <Box m={2} sx={{ width: "100%" }}>
          <Typography variant="h1">{heading}</Typography>
          {description.map((desc) => {
            return (
              <Typography 
                mt={2}
                style={{
                  wordWrap: "break-word",
                  textAlign: "left",
                }}
                variant="subtitle1"
              >
                {desc}
              </Typography>
            );
          })}

          <Typography
            style={{
              wordWrap: "break-word",
              textAlign: "left",
            }}
            variant="subtitle1"
          >
            {description}
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={3} xs={11}></Grid>
      <Grid item sm={1} xs={0}></Grid>
    </Grid>
  );
}
