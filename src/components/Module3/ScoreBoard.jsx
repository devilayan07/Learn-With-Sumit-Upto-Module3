import { useState } from "react";
import Counter1 from "./Counter1";
import "../../style.css"

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter1 person="Taylor" key={"Taylor"} />
      ) : (
        <Counter1 person="Sarah" key={"Sarah"} />
      )}
      {/* {isPlayerA && <Counter1 person="Talyor"/>}
      {!isPlayerA && <Counter1 person="Sarah"/>} */}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
