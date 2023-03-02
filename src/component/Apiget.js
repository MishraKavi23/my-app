import { useEffect, useState } from "react"

export const Apiget = () => {
    const [data, setData] = useState([])
    // fetch("https://jsonplaceholder.typicode.com/todos/1").then((result)=>{
    // result.json().then((response) => {
    //     console.log(response)
    //     setData(response)
    // })
    // })
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((result)=>{
            result.json().then((response) => {
                setData(response)
            })
            })
      },[]);
      console.log(data)
    return(
        <>
            <h2>This is Api calling</h2>
            <h3>{data.title}</h3>

        </>
    )
}