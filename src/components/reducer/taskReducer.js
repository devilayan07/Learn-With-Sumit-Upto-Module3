export default function taskReducer(tasks,action){
    switch(action.type){
        case "added":{
                  return [
      ...tasks,{
        id:action.id,
        text:action.text,
        done:false
      }
     ]

        }
        case "changeTask":{
                  return tasks.map((item)=>{
        if(item.id===action.task.id){
          return action.task
        }else{
          return item
        }
      })


        }
        case "deleted":{
        return tasks.filter((item)=>item.id!==action.id)


        }
        default:{
        throw Error (`No action matched with ${action?.type}`)

        }
    }

}