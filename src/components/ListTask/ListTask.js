import { useState } from "react";
import { connect } from "react-redux";
import Task from "../Task/Task";

import { FormControlLabel, Switch } from "@material-ui/core";
import classes from "./ListTask.module.css";

const ListTask = (props) => {
  const [filtred, setFiltred] = useState(false);

  console.log("list Task");

  if (props.todos.length === 0) {
    return <h1>their is no todos !</h1>;
  }

  let todos;
  if (filtred)
    todos = props.todos
      .filter((el) => el.isDone === true)
      .map((todo) => <Task key={todo.id} todo={todo} />);
  else todos = props.todos.map((todo) => <Task key={todo.id} todo={todo} />);

  // console.log(todos);

  return (
    <div className={classes.TaskList}>
      <h1>ListTask</h1>
      <FormControlLabel
        control={
          <Switch
            id="chkIsDone"
            color="secondary"
            checked={filtred}
            onChange={(e) => setFiltred(e.target.checked)}
          />
        }
        label="IsDone"
      />
      {todos}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(ListTask);
