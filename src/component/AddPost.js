import { useState } from "react"

export const AddPost = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const saveDetail = () => {
        console.log({name,email,number})
        let data = {name,email,number}
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method : 'POST',
            headers : {
                'Accept' : 'applications/json',
                'content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            console.log(result , "result")
        })
    }

    return(
        <>
            <div>
                <h2>This is post api</h2>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/> 
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/> 
                <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)}/> 
                <button onClick={saveDetail}>Add Details</button>
            </div>
        </>
    )
}