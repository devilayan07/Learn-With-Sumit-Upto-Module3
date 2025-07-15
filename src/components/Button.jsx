export default function Button({onSmash,children}){
    // const handleClick=()=>{
    // //  alert("Hello World")
    // console.log("Hello World")
    // }
    return(
        <button onClick={onSmash}>{children}</button>
    )
}