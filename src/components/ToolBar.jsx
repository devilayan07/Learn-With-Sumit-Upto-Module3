import Button from "./Button"

function AlertButton({message,children}){
    return(
        <button onClick={()=>alert(message)}>{children}</button>
    )

}

function PlayButton({movieName}){
    const handleClick=()=>{
      alert(`Playing ${movieName}`)
    }

   return(
    <Button onSmash={handleClick}>Play :{movieName}</Button>
   )
}

export default function ToolBar(){
    return(
        <div>
            {/* <AlertButton message="Playing!">Play Movie</AlertButton>
            <AlertButton message="Playing!">Upload Image</AlertButton> */}
       <PlayButton movieName="Swiggy Delivery Service"/>

        </div>
    )
}