const InputField = ({inputData, column}) => {
    return(
        <>
            {
                inputData.map((data) => {
                    return(
                        <>
                            <div className={column}>
                                <fieldset>
                                    <input type={data.type} name={data.type} placeholder={data.placeholder} autocomplete="on" required />
                                </fieldset>
                            </div>
                        </>
                    )
                })
            }

            
        </>
    )
}
export default InputField;