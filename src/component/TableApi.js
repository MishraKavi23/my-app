import { useEffect, useState } from "react"

export const TableApi = () => {
    const [tableData, setTableData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((response)=> {
                setTableData(response)
                console.log(tableData)
            })
        })
    }, [])
    return(
        <>
            <div className="tableMain">
                <table border="1px">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Rank</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.userId}</td>
                                            <td className="text-capitalize">{data.title}</td>
                                            <td className={`green ${data.completed == false ? "red" : ""}`}>{data.completed == false ? "Incomplete" : "Completed"}</td>
                                            {/* // {tab === "login" ? <Login /> : <Signup />} */}
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </>   
    )
}
// useEffect(() => {
//     //Runs only on the first render
//   }, []);