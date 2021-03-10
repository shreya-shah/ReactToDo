import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import AddToList from "./AddToList";

import {
  addToChecklist,
  getChecklist,
  updateTask,
} from "./services/TaskService";
import ToDoList from "./ToDoList";

export default function Dashboard(props) {
  const [checklist, setChecklist] = useState([]);
  const [checklistUpdated, setChecklistUpdated] = useState(false);

  useEffect(() => {
    getChecklist().then((checklistItems) => {
      setChecklist(checklistItems);
    });
    setChecklistUpdated(false);
  }, [checklistUpdated]);

  const addTask = (taskName) => {
    let task = {
      task: taskName,
      done: false,
      date: new Date(),
    };

    let updatedChecklist = [...checklist, { ...task, id: `${task.date.getSeconds}` }];
    setChecklist(updatedChecklist);

    addToChecklist(task, (res, err) => {});
  };

  const updateTaskInChecklist = (task) => {
    updateTask({ ...task, done: !task.done }).then((res, err) => {
      if (!err) {
        setChecklistUpdated(true);
      }
    });
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <AddToList addTask={addTask} />
        </Grid>
        <Grid item xs={12}>
          <ToDoList checklist={checklist} updateTask={updateTaskInChecklist} />
        </Grid>
      </Grid>
    </div>
  );
}
