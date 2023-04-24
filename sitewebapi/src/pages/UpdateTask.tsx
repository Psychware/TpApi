
import React, {FC, useState, useEffect} from "react";
import '../assets/css/App.css';
import FormTaskAdd from "../components/FormTaskAdd";
import { getTaskById, updateTask} from "../services/task.service";
import Task from "../types/Task";
import {Link, useParams} from "react-router-dom";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {IoEyeSharp} from "react-icons/io5";


const UpdateTask:FC = () =>{

    const {idTask} = useParams()
    console.log(idTask);
    const [task, setTask] = useState<Task | null>(null);
    const [isOpenForm, setOpenForm] = useState(false);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        async function getData() {
            const task: Task = await getTaskById(idTask);
            setTask(task);
        }
        getData();

    }, [refresh]);

    const sendUpdateTask = (formData: any) => {
        setOpenForm(false);
        const update = async (taskUpdate : Task)=>{
            await updateTask(taskUpdate);
            setRefresh(refresh+1);
        }

        update(formData);

    }
    if (!task) {return (<div>Chargement....</div>)}
    return (
        <header className="App-header">
            <Container>
          
                <Row>
                    <div> <FormTaskAdd onSubmit={sendUpdateTask} task={task}/></div>
                </Row>

                <Row>

                    <Link to ={'/tasks/'}>
                        <Button variant="primary" className='iconButton'><IoEyeSharp /> Retour aux tâches</Button>
                    </Link>
                </Row>

            </Container>


            

        </header>

    )}
export default UpdateTask;