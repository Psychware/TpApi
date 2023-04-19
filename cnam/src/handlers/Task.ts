import { Request, Response } from "express";
import { Task, ITask } from "../models/Task";

// Ajouter une tâche 
const addTask = async (req: Request, res: Response): Promise<void> => {
    const task = new Task(req.body);
    try {
        console.log("addTask");
        await task.save();
        res.json(task);
    } catch (e) {
        res.status(500).json({error : e});
    }

    
}

// Récupère tous les utilisateurs 
const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("getAllTasks");
        const tasks:ITask[] = await Task.find().populate('user');
         
        // const user:IUser = tasks[0].user.
        tasks ? res.json(tasks) : res.status(404).send({error : {
            code : 404,
            message : "Not found"
        }});
    } catch (e) {
        res.status(500).json({error : e});
    }
} 

// Récupère un utilisateur par son identifiant  
const getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id =  req.params.id;
        console.log("getTaskById");
        const task = await Task.findById(id).populate("user");
         
        // const user:IUser = tasks[0].user.
        task ? res.json(task) : res.status(404).send({error : {
            code : 404,
            message : "Not found"
        }});
    } catch (e) {
        res.status(500).json({error : e});
    }
} 

// Supprime une tâche 
const deleteTaskById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    try {
        const  task = await Task.findByIdAndDelete(id);
        task ? res.json(task) : res.status(404).send({error : {
                code : 404,
                message : "Not Found"
            }})
    } catch (e){
        res.status(500).json({error : e})
    }
} 


export { addTask , getAllTasks, getTaskById, deleteTaskById}


