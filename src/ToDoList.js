import React from "react";

import { Checkbox, FormControlLabel, FormGroup, Grid, List, ListItem, Typography } from "@material-ui/core";

export default function ToDoList(props) {
  const handleChange = (event) => {
    let task = { ...JSON.parse(event.target.value) };
    props.updateTask(task);
  };

  return (
    <Grid container spacing={4} alignItems="center" justify="center">
      <Grid item xs={10}>
        <Typography variant="h5" >Checklist</Typography>
      </Grid>
      <Grid item xs={10}>
        <FormGroup>
          <List>
          {props.checklist.map((task) => {
            return (
              <ListItem key={task.id} style={{ background: task.done ? '#f1f1f1' : '#f8f8f8' , margin: '1em' }} >
                <FormControlLabel
                  // key={task.id}
                  control={
                    <Checkbox
                      checked={task.done}
                      onChange={handleChange}
                      name={task.task}
                      value={JSON.stringify(task)}
                      color="secondary"
                    />
                  }
                  label={<Typography color={ task.done ? "textSecondary" : "textPrimary"}>{task.task}</Typography>}
                  color="secondary"
                />
                </ListItem>
                );
              })}
          </List>
        </FormGroup>
      </Grid>
    </Grid>
  );
}
