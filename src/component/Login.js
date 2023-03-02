import InputField from "./InputField";

const Login = () => {
    const inputData = [
        {
            type: "email" ,
            name : "name",
            placeholder : "Enter Email..."
        },
        {
            type: "password" ,
            name : "Last name",
            placeholder : "Enter password..."
        },
    ]
    return(
        <>
            <h4 className="my-3 text-center">Login</h4>
            <form className="row px-0 py-2 form">
                <InputField inputData={inputData} column="col-lg-12"/>
             </form>
        </>
    )
}
export default Login;