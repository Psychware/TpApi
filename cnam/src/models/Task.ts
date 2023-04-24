import { Schema , Model , model, ObjectId } from "mongoose";
import { User, IUser } from "./User";

interface ITask {
    name : string;
    user : ObjectId | IUser;
    statut : string;
}; 

const TaskSchema  = new Schema<ITask>({
    name : {
        type : String,
        unique : true,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        // unique : true,
        required : true
        
    },
    statut : {
        type : String,
        required : true
    }

});

const Task : Model<ITask> = model('Task',TaskSchema);

export {Task, ITask}