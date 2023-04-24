import Task from "../types/Task";

const getAllTasks = async ():Promise<Task[]>=>{
    const response = await fetch('/tasks');
    const tasks:Task[]  = await response.json();
    return tasks

}


const addTask = async (task : Task)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    try {
        const response =  await fetch('/task', requestOptions);
        const taskSave = await response.json();
        return taskSave;
    } catch(e) {
        console.log(e)
    }


}
const getTaskByUser = async (id: string) => {

    try {

        const response = await fetch('/tasks/'+id);
        const tasks = await response.json();

        return tasks;

    }catch (error) {

        console.log(error)

    }

}
const getTaskById = async (id: any) => {

    try {
        console.log(id);
        const response = await fetch('/task/'+id);
        const tasks = await response.json();

        return tasks;

    }catch (error) {

        console.log(error)

    }

}

const updateTask = async (task : Task)=>{
    console.log("update")
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    try {
        console.log(task._id)
        const response =  await fetch('/updateTaskById/'+task._id, requestOptions);
        const taskSave = await response.json();
        return taskSave;
    } catch(e) {
        console.log(e)
    }
}
export {getAllTasks, addTask,getTaskByUser,getTaskById,updateTask}