import React from 'react'
import { Levels } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'


const TaskListComponent = () => {
const defaulTask =new Task('Example','Default Description',false, Levels.NORM)
  return (
    <div>
        <div>
            Your Task:
            {/* TODO: aplicar un for/map*/}
        </div>
        <TaskComponent task={defaulTask}/>
    </div>
  )
}



export default TaskListComponent