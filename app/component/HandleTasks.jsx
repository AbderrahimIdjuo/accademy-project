"use client";
import * as React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, createContext, useEffect } from "react";
import TaskList from "@/app/component/TaskList";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
export const TaskContext = createContext(null);

export default function HandleTasks({firstName , lastName , emailAddress , clerkId}) {
  const [allTask, setAllTask] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    
    const Data ={...data , clerkId} 
    const result = await axios.post("/api/task" , Data)
    console.log("result", result);
    reset()
    fetchTasks()

  };

  

  useEffect(() => {
    fetchUsers()
    fetchTasks()
   
  }, []);

  const fetchUsers = async () => {
    try {
      const result = await axios.get("/api/user");
      const { Users } = result.data;
      console.log("Users :", Users);
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

 const fetchTasks = async () => {
    try {
      const result = await axios.get(`/api/task/${clerkId}`);
      const { tasks } = result.data;
      setAllTask(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const TaskValues = { allTask, fetchTasks };

  return (
    <>
      <TaskContext.Provider value={TaskValues}>
        <div className="p-5 bg-slate-200 rounded border-slate-700 border-2 mt-[5rem] w-[600px] mx-auto">
          <div className="flex justify-between">
            <h1>Hi! {firstName} Add task</h1>
            <div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-3">
              <input
                type="text"
                className="my-4 rounded focus:!border-2 focus:!border-sky-700 "
                {...register("task")}
              />
              <button
                className="rounded bg-green-400 text-white py-1 px-3 text-bold"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
          <h1>To do list</h1>
          <TaskList />
        </div>
      </TaskContext.Provider>
    </>
  );
}
