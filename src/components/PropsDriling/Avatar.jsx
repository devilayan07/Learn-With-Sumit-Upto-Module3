import User from "./User";

export default function Avatar(){
    return(
        <>
        <User 
        person={{name:"Ayan",age:28}} 
        size={100}
        />
        </>
    )
}