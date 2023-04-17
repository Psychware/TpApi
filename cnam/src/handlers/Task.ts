import { Request, Response } from "express";
import { Task, ITask } from "../models/Task";
import { IUser, User } from "../models/User";



// create Task 
const addTask = async (req: Request, res: Response): Promise<void> => {
    
    const task = new Task(req.body);
    try {
        await task.save();
        res.json(task);
    } catch (e) {
        res.status(500).json({error : e});
    }

    
}

// // getUserByID
// const getTaskById = async (req: Request, res: Response): Promise<void> => {
//     const id = req.params.id;
//     try {
//         const user = await User.findById(id);
//         user ? res.json(user) : res.status(404).send({error : {
//             code : 404,
//             message : "Not found"
//         }});
//     } catch (e) {
//         res.status(500).json({error : e});
//     }

// }

// getAllUsers 
const getAllTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks:ITask[] = await Task.find().populate('user');
         console.log(tasks[0].user)
        // const user:IUser = tasks[0].user.
        tasks ? res.json(tasks) : res.status(404).send({error : {
            code : 404,
            message : "Not found"
        }});
    } catch (e) {
        res.status(500).json({error : e});
    }
}

// //Delete :
// const deleteTask = async (req: Request, res: Response):Promise<void> => {
//     const id = req.params.id;
//     try {
//         const  user = await User.findByIdAndDelete(id);
//         user ? res.json(user) : res.status(404).send({error : {
//                 code : 404,
//                 message : "Not Found"
//             }})
//     } catch (e){
//         res.status(500).json({error : e})
//     }

// }
// export { addTask, getTaskById , getAllTask, deleteTask }

export { addTask , getAllTask}


