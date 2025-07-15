export default function SignUp(){
    return(
        <div>
            <form action="" onSubmit={(e)=>{
                e.preventDefault()
                console.log("Submitting")
            }}>
                <input type="text" />
                <button>Send</button>
            </form>
        </div>
    )
}