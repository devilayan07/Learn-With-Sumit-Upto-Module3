const style1={
    backgroundColor:"red"
}

const style2={
    backgroundColor:"green"
}

const color="green"
let style=""

if(color==="green"){
  style=style1
}
else{
    style=style2
}
export default function ToDoList(){

    const person={
        name:"Ayan",
        theme:{
                                backgroundColor:"black",
            color:"yellow"


        }


    }
    return(
        <>
        <h1>{person.name} To do list</h1>
        <ul style={person.theme}>
                  <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>

        </ul>

        <h1 style={color==="green" ? style1 : style2}>East Bengal</h1>
    </>
    )
}