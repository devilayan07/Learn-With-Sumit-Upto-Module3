export default function User({person,size=0}){
    // const{person,size}=props
    return(
        <>
        <h2>Name:{person?.name}</h2>
        <div>{size}</div>
        </>
    )
}