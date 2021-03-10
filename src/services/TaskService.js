import * as request from "superagent";


const BASE_URL = 'http://localhost:3001/checklists'

function getChecklist() {
 return request.get(BASE_URL)
  .then(res => res.body);
}

function addToChecklist (task, done) {
  request.post(BASE_URL)
  .send(task)
  .then(done);
}

function updateTask(task) {
  return request.patch(`${BASE_URL}/${task.id}`)
  .send({
    done: task.done
  })
    
}

export { addToChecklist, getChecklist, updateTask };