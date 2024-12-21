import React from 'react'
import Task from './Task'
import { TaskContext } from '@/app/component/HandleTasks';
import { useContext } from 'react';

function TaskList() {
  const {allTask} = useContext(TaskContext)
  
  return (
    <ul>
        {allTask.length > 0 ? (
            allTask.map((element) => (
              <Task key={element.id} id={element.id} task={element.task} />
            ))
          ) : (
            <li>No tasks available</li>
          )}
    </ul>
  )
}

export default TaskList