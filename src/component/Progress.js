const ProgressBar = ({progressData}) => {
    return(
        <>
            <div class="first-bar progress-skill-bar">
                {
                    progressData.map((data) => {
                        return(
                            <>
                                <div className="position-relative mb-4">
                                    <h4>{data.name}</h4>
                                    <span>{data.percent}</span>
                                    <div class="filled-bar"></div>
                                    <div class="full-bar"></div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ProgressBar;