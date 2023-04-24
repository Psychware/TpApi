import React, {FC, useState, useEffect} from "react";
// import React, {FC, useState, useEffect, Dispatch} from "react";
import User from "../types/User";
import Task from "../types/Task";
import { getAllTasks } from "../services/task.service";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {IoPencilSharp} from "react-icons/io5";
// import {getUsers} from "../services/user.service";

const  ListTask: FC = ()=>{
    const [task, setTask] = useState<Task[]>([]);
    const [refresh] = useState(0);
    // console.log("ok");
    useEffect( ()=>{
        const getData = async ()=>{
           
            const task:Task[] = await getAllTasks();
            console.log(task);
                setTask(task);
        }
        getData();
    },[refresh]);

    return (
        <div>
            <h3>Liste des tâches</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nom de la tâche</th>
                        <th>Détails</th>
                        <th>Statut</th>
                        <th>Date</th>
                        <th>Utilisateur</th>
                        <th>@</th>
                    </tr>
                </thead>
                <tbody>
                    {task.map((val, key)=>{
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.details}</td>
                                <td>{val.statut}</td>
                                <td>{val.dates}</td>
                                <td>{val.user.name}</td>
                                <td>{val.user.email}</td>
                                <td>
                                <Link to ={'/tasks/' + val._id }>
                                    <Button variant="primary" className='iconButton'><IoPencilSharp /> Modifier la tâche</Button>
                                </Link>

                            </td>
                            </tr>
                        )}
                    )}
                </tbody>
               
                
            </table>
        </div>

    )
}
export default ListTask;