import '../assets/css/App.css';

import React, {FC, useState, useEffect, Dispatch} from "react";
import {getAllTasks, addTask} from "../services/task.service";
import FormTaskAdd from "../components/FormTaskAdd";
import Task from '../types/Task';
import {useParams} from "react-router-dom";



const AddTask:FC = () =>{
    const {idUser} = useParams();
    const [tasks, setTasks] = useState<Task[] | null>([]);
    const [isOpenForm, setOpenForm] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const sendNewTask = (formData: any) => {
        setOpenForm(false);
        const add = async (taskAdd : Task)=>{
            const task = await addTask(taskAdd);
            setRefresh(refresh+1);
        }

        add(formData);

    }
    return (
        <header className="App-header">
            <div> <FormTaskAdd onSubmit={sendNewTask}  iduser={idUser}/></div>
        </header>

    )}
export default AddTask;