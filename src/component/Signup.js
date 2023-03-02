import InputField from "./InputField"

const Signup = () => {
    const inputData = [
        {
            type: "text" ,
            name : "name",
            placeholder : "Enter First Name..."
        },
        {
            type: "text" ,
            name : "Last name",
            placeholder : "Enter Last Name..."
        },
        {
            type: "email" ,
            name : "email",
            placeholder : "Enter Email..."
        },
        {
            type: "text" ,
            name : "name",
            placeholder : "Enter Password..."
        },
    ]
    return(
        <>
             <h4 className="my-3 text-center">Signup</h4>
             <form className="row px-0 py-2 form">
                <InputField inputData={inputData} column="col-lg-6"/>
             </form>
        </>
    )
}
export default Signup