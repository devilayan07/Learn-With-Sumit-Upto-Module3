import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
    // const[isActive,setIsActive]=useState(false)
    const[activeIndex,setActiveIndex]=useState(0)

    const handleActive=(index)=>{
        setActiveIndex(index)

    }
  return (
    <>
      <h2>Learn With Sumit</h2>
      <Panel isActive={activeIndex===0 && true}   title="Paid Course" onActive={()=>handleActive(0)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis, quidem perspiciatis aut culpa dolore quasi blanditiis accusantium labore commodi consequatur mollitia ut magni quae quia sint a fugiat molestias.
        </Panel>
      <Panel title="Free Course" isActive={activeIndex===1 && true}  onActive={()=>handleActive(1)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa est libero laudantium? Laboriosam cumque possimus reprehenderit suscipit itaque. In harum tempore enim! Dolores voluptas laboriosam sint reiciendis accusamus veniam.
      </Panel>
    </>
  );
}
