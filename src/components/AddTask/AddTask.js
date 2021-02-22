import { connect } from "react-redux";
import { addTaskHandler } from "../../store/action/actions";

import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const preAddHandler = () => {
    let newTask = {
      description: document.getElementById("txtTaskToAdd").value,
      isDone: document.getElementById("chkIsDone").checked,
    };
    return newTask;
  };

  return (
    <div className={classes.AddTaskDiv}>
      <h1>AddTask</h1>
      <TextField id="txtTaskToAdd" label="Description" />
      <FormControlLabel
        control={<Switch id="chkIsDone" color="primary" />}
        label="IsDone"
      />

      <br />
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() => props.onAddHandler(preAddHandler())}
      >
        Upload
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddHandler: (newTask) => dispatch(addTaskHandler(newTask)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
