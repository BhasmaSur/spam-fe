import React from 'react'
import {Box,Button,AddIcon} from "@spammetwice/common"
import { makeStyles } from "@spammetwice/common";
import { padding, width } from '@mui/system';

const useStyles = makeStyles((theme)=>({
  boxStyle:{
    background: theme.palette.primary.main,
    borderRadius: "30px",
    width: "fit-content",
    padding: "10px",
    margin:"auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
}))

const AddFields = ({itemHandler}) => {
  const classes = useStyles();
  return (
    <Box 
    className={classes.boxStyle}
    >
      <Button 
        sx={{borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px"}}        
        variant='contained'
        onClick={()=>itemHandler("desc")}
        >
        Add Text
      </Button>
      <Button 
        sx={{borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}}
        color='secondary'
        variant='contained'
        onClick={()=>itemHandler("img")}>
        Add Image
      </Button>
    </Box>
  )
}

export default AddFields