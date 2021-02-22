import { useState } from "react";
import { connect } from "react-redux";
import { removeTaskHandler } from "../../store/action/actions";

import { Button, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import classes from "./Task.module.css";
import EditTask from "../EditTask/EditTask";

const Task = (props) => {
  let divStyle = [
    classes.TaskDiv,
    props.todo.isDone ? classes.bgGreen : classes.bgRed,
  ];

  return (
    <div className={divStyle.join(" ")}>
      <TextField
        label="Description"
        id={`txtTodo${props.todo.id}`}
        value={props.todo.description}
        InputProps={{
          readOnly: true,
        }}
      />

      <div>
        <EditTask todo={props.todo} />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => props.onDeleteHandler(props.todo.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteHandler: (id) => dispatch(removeTaskHandler(id)),
});

export default connect(null, mapDispatchToProps)(Task);
