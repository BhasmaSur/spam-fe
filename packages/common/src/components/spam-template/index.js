import React from "react";
import { Box, Typography, uuidv4, Link, FirstAd } from "@spammetwice/common";
import { makeStyles, Grid } from "@spammetwice/common";
import { fontSize } from "@mui/system";
import { getCardContentUtilityClass } from "@mui/material";
import { SecondAd } from "../ads";

export default function SpamTemplate({ props }) {
  const { heading, description, resolution, similarSpams } = props;

  const getTextContent = (content) => {
    return (
      <Typography
        key={uuidv4()}
        mt={2}
        style={{
          wordWrap: "break-word",
          textAlign: "left",
        }}
        variant="subtitle1"
      >
        {content}
      </Typography>
    );
  };

  const getImageContent = (url) => {
    return (
      <Box mt={2}>
        <img src={url} width="100%" height="300px" />
      </Box>
    );
  };
  const getTheDescription = (desc) => {
    if (desc.type === "desc") {
      return getTextContent(desc.content);
    } else {
      return getImageContent(desc.url);
    }
  };
  // console.log(props)
  return (
    <Grid container>
      <Grid item sm={2} xs={0}></Grid>
      <Grid m={2} item sm={5} xs={11}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h1">{heading}</Typography>
          {description.map((desc) => getTheDescription(desc))}
          <Box mt={3}>
            <Typography align="left" variant="h1">
              Resolution : {resolution}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid m={2} item sm={3} xs={11}>
        <Typography align="left" variant="h1">
          Similar Spams
        </Typography>
        {similarSpams.map((sS) => {
          return (
            <Typography align="left" variant="subtitle1">
             <Link key={uuidv4()} href={sS.url}>
              {sS.title}
            </Link>
          </Typography>
           
          );
        })}
        <Box sx={{ width: "100%" }}
        mt={3}
        >
          <FirstAd/>
        </Box>
        <Box sx={{ width: "100%" }}
        mt={3}
        >
          <SecondAd/>
        </Box>
      </Grid>
      <Grid item sm={2} xs={0}></Grid>
    </Grid>
  );
}
