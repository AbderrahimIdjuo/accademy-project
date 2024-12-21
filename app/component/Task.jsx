import axios from "axios";
import React from "react";
import { TaskContext } from '@/app/component/HandleTasks';
import { useContext } from 'react';

function Task({ task , id }) {
    const {fetchTasks} = useContext(TaskContext)
    const DeleteRecord = async ()=>{
        const result = await axios.delete(`/api/task/${id}`)
        fetchTasks()
    }
  return (
    <div className="container flex flex-row justify-between text-slate-900 bg-sky-300 p-2 m-2 rounded ">
      <h3 >{task}</h3>
      <button className="bg-rose-600 rounded p-1 hover:bg-rose-500 active:bg-rose-400 text-white" onClick={()=>{DeleteRecord()}}>Delete</button>
    </div>
  );
}

export default Task;
