import Task from "./Task";

export default function TaskList({tasks,onChangeTask,onDelete}){
    return(
        <>
        <ul>
            {
                tasks.map((item,index)=> <Task key={index} item={item} onChangeTask={onChangeTask} onDelete={onDelete}/>)
            }
        </ul>
        </>
    )
}