import React, { useState } from "react";
import {
  Grid,
  InputField,
  Box,
  AddFields,
  uuidv4,
  UploadImageBox,
  DeleteIcon,
  IconButton,
  RemovableInputField,
} from "@spammetwice/common";

const AddSpamTemplate = () => {
  const [spamContent, setSpamContent] = useState([]);
  const handleTitleChange = () => {};
  const itemHandler = (type) => {
      let itemNumber = spamContent.length
    let obj = { type, itemNumber };
    type === "desc" ? (obj.content = "") : (obj.url = "");
    setSpamContent([...spamContent, obj]);
  };

  const deleteItem = (itemNumber) => {
      spamContent.splice(itemNumber,1)
      setSpamContent([...spamContent])
      console.log(spamContent,itemNumber)
  };

  const handleImageChange = ()=>{

  }

  const getItemType = (item,index) => {
    if (item.type === "desc") {
      return (
        <Box m={2} key={uuidv4()}>
          <RemovableInputField
            text="type here..."
            type="text"
            handleChange={handleTitleChange}
            handleDelete={deleteItem}
            itemNumber = {index}
          />
        </Box>
      );
    } else {
      return (
        <Box m={2} key={uuidv4()}>
          <UploadImageBox
          handleChange={handleImageChange}
          handleDelete={deleteItem}
          itemNumber = {index}
          />
        </Box>
      );
    }
  };
  const handleDescription = () => {};
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Box m={2}>
          <InputField
            text="Title"
            type="text"
            handleChange={handleTitleChange}
          />
        </Box>
        {spamContent &&
          spamContent.map((item,index) => {
            return getItemType(item,index);
          })}
        <Box m={2}>
          <AddFields itemHandler={itemHandler}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddSpamTemplate;
