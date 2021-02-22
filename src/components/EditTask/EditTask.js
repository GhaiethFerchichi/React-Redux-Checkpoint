import { connect } from "react-redux";

import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { editTask } from "../../store/action/actions";

const EditTask = (props) => {
  const [open, setOpen] = useState(false);
  const [textVlaue, setTextVlaue] = useState(props.todo.description);
  const [isDoneValue, setIsDoneValue] = useState(props.todo.isDone);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const editedTaskFormated = () => {
    return {
      id: props.todo.id,
      description: textVlaue,
      isDone: isDoneValue,
    };
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        onClick={onOpenModal}
      >
        Edit
      </Button>
      <Modal open={open} onClose={onCloseModal} center>
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Edit Task with id {props.todo.id}</h1>
          <div>
            <TextField
              label="Description"
              id={`txtEditedValue`}
              value={textVlaue}
              onChange={(e) => setTextVlaue(e.target.value)}
            />
            <FormControlLabel
              control={
                <Switch
                  id="chkIsDone"
                  color="primary"
                  checked={isDoneValue}
                  onChange={(e) => setIsDoneValue(e.target.checked)}
                />
              }
              label="IsDone"
            />
          </div>
          <br />
          <div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={() => {
                onCloseModal();
                props.onSaveHandler(editedTaskFormated());
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveHandler: (taskEdited) => dispatch(editTask(taskEdited)),
  };
};

export default connect(null, mapDispatchToProps)(EditTask);
