import express, { Application, Request, Response } from 'express';
import  { connect } from 'mongoose';
import { getAllUsers, getUserById, addUser, deleteUserById } from './handlers/User';
import { addTask , getAllTasks, getTaskById,deleteTaskById} from './handlers/Task';
// import { getTaskById, getAllTask, addTask, deleteTask } from './handlers/Task';


const port: number = 8080;

const app: Application = express();
app.use(express.json());


// Routes pour User
app.get('/user/:id', getUserById);
app.get('/users', getAllUsers );
app.post('/user', addUser);
app.get('deleteUserById/:id', deleteUserById);


//Routes pour Task
app.get('/task/:id', getTaskById );
app.get('/tasks', getAllTasks );
app.post('/task', addTask);
app.get('/deleteTaskById/:id', deleteTaskById);

const dbConnect = async (): Promise<void> => {

    const uri: string = "mongodb+srv://anthony:Mongomdp2000@cluster0.60x5mat.mongodb.net/anthony?retryWrites=true&w=majority";
    try {
        const cnx = await connect(uri);
        console.log('mongo connecté ');
    } catch (error) {
        console.log(error);
    }
}

// start server
app.listen(port, async () => {
    // database connection
    await dbConnect();
    
    console.log('Server listening on port ', port);
    
});