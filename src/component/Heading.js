const Heading = ({heading, align}) => {
    return(
        <>
            <div className={"section-heading" + " "+ align}>
                {
                    heading.map((data,index) => {
                        return(
                            <>
                                <h2>{data.name}</h2>
                                <p>{data.para}</p>
                            </>
                        )
                    })
                }                            
            </div>
        </>
    )
}
export default Heading;