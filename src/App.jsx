import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gallery  from './components/Gallery' // default import 
import  { Profile, Card as Image } from './components/Gallery' // named import and also I can rename the name import with my preferable name that is called Import Alias
import Test from './components/Test'
import ToDoList from './components/ToDoList'
import Avatar from './components/PropsDriling/Avatar'
import PackingList from './components/PackingList'
import List from './components/List'
import Button from './components/Button'
import ToolBar from './components/ToolBar'
import SignUp from './components/SignUp'
import ImageChange from './components/ImageChange'
import MovingDot from './components/MovingDot'
import Form from './components/Form'
import NestedChange from './components/NestedChange'
import ListItems from './components/ListItems'
import Artist from './components/Artist'
import ShapeEditor from './components/ShapeEditor'
import CounterList from './components/CounterList'
import InsertArray from './components/InsertArray'
import ReverseArray from './components/ReverseArray'
import Quiz from './components/Module3/Quiz'
import Pointer from './components/Module3/Pointer'
import FeedBackForm from './components/Module3/FeedBackForm'
import AddForm from './components/Module3/AddForm'
import AvoidRedundantForm from './components/Module3/AvoidRedundantForm'
import Mirror from './components/Module3/Mirror'
import Travel from './components/Module3/Travel'
import TravelEditable from './components/Module3/TravelEditable'
import TravelPlan from './components/Module3/TravelPlan'
import Accordion from './components/Module3/Accordion'
import Counter from './components/Module3/Counter'
import Scoreboard from './components/Module3/ScoreBoard'
import ContactList from './components/Module3/ContactList'
import Chat from './components/Module3/Chat'
import AddTask from './components/useReducer/AddTask'
import TaskList from './components/useReducer/TaskList'
import { initialTasks } from './data/tasks'
import taskReducer from './components/reducer/taskReducer'
import Page from './components/useContext/Page'
import TaskApp from './components/AvoidPropDriling/TaskApp'
  

 const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function App() {
  const person="Ayan";
  const age=28;
  const size=100
  const color="red"
  const[showB,setShowB]=useState(true)
    const [to, setTo] = useState(contacts[0]);
    // const[tasks,setTasks]=useState(initialTasks)
     const[tasks,dispatch]=useReducer(taskReducer,initialTasks)
   
    const getNextId=(data)=>{
      const maxId=data.reduce((accu,current)=>accu && accu.id>current.id ? accu.id :current.id )
      return maxId+1

    }

    const handleTaskChange=(task)=>{
      // const nextTask=tasks.map((item)=>{
      //   if(item.id===task.id){
      //     return task
      //   }else{
      //     return item
      //   }
      // })
      // setTasks(nextTask)

      dispatch({
        type:"changeTask",
        task

      })

    }




   const handleAddTask=(text)=>{
    //  setTasks([
    //   ...tasks,{
    //     id:getNextId(tasks),
    //     text:text,
    //     done:false
    //   }
    //  ])

    dispatch({
      type:"added",
      text:text,
      id:getNextId(tasks)

    })
   }

   const handleDeleteTask=(taskId)=>{
    //  const deleteTask=tasks.filter((item)=>item.id!==taskId)
    //  setTasks(deleteTask)

    dispatch({
      type:"deleted",
      id:taskId
    })

   }

  
  return (
    <div>
       {/* <Profile person={person} age={age} size={100}/> */}
      {/* <Gallery/> */}
      {/* <Image/>  */}
      {/* <Test/> */}
      {/* <ToDoList/> */}
      {/* <Avatar/> */}
      {/* <PackingList/> */}
      {/* <List/> */}
      {/* <Button/> */}
      {/* <ToolBar/> */}
      {/* <SignUp/> */}
      {/* <ImageChange/> */}
      {/* <MovingDot/> */}
      {/* <Form/> */}
      {/* <NestedChange/> */}
      {/* <ListItems/> */}
      {/* <Artist/> */}
      {/* <ShapeEditor/> */}
      {/* <CounterList/> */}
      {/* <InsertArray/> */}
      {/* <ReverseArray/> */}

        {/* <Quiz  /> */}
        {/* < Pointer/> */}
        {/* <FeedBackForm/> */}
        {/* <AddForm/> */}
        {/* < AvoidRedundantForm/> */}
        {/* <Mirror messageColor={color}/> */}
        {/* <Travel/> */}
        {/* <TravelEditable/> */}
        {/* <TravelPlan/> */}
        {/* <Accordion/> */}
        {/* <div style={{display:"flex"}}>
                 <Counter/>
                 {
                  showB && <Counter/>

                 }
                 <label htmlFor="">
                                   <input type="checkbox" 
                 name="" 
                 id=""
                 checked={showB}
                 onChange={(e)=>setShowB(e.target.checked)}
                 />
                Render the second counter

                 </label>

        </div> */}
        {/* <Scoreboard/> */}

            {/* <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div> */}

    {/* <h1>Prague itinerary</h1>
    <AddTask onAdd={handleAddTask}/>
    <TaskList tasks={tasks} onChangeTask={handleTaskChange} onDelete={handleDeleteTask}/> */}


 {/* <Page/> */}
 <TaskApp/>
    </div>
  )
}

export default App
