import React, { useState } from 'react'

import { Button, Grid, TextField } from '@material-ui/core'


export default function AddToList(props) {

  const [task, setTask] = useState('');


  const addTask = () => {
    props.addTask(task);
    setTask('');
  }

  return (
    <div>
      <Grid container spacing={8} alignItems="center" justify="center">
        <Grid item xs={10} sm={9}>
          <TextField
            fullWidth
            label="Enter Task"
            variant="outlined"
            value={task}
            onChange={event => setTask(event.target.value)}
            />
        </Grid>
        <Grid item xs={10} sm={1}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={addTask}
            >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}