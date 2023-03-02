import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Popup = ({btnVal, classVal}) => {
    const [openPopup, setOpenPopup] = useState(false)
    const [tab, setTab] = useState("login")
    console.log(tab)
    const renderPopup = () => {
        if(!openPopup) return null;
        return(
            <>
                <div className="popup-main">
                    <div className="popup-dialog">
                        <div className="popup-close" onClick={() => setOpenPopup(false)}>x</div>
                        <button className={tab === "login" ? "active tab-btn" : "tab-btn"} onClick={() => setTab("login")}>Login</button>
                        <button className={tab === "signup" ? "active tab-btn" : "tab-btn"} onClick={() => setTab("signup")}>Sign Up</button>
                        {tab === "login" ? <Login /> : <Signup />}
                        <button className="tab-btn">{tab === "login" ? "Login" : "Signup"}</button>
                    </div>
                </div>
            </>
        )
    }

    const renderButton = (btnVal, classVal) => {
        console.log(openPopup)
        return (
            <>
                <button className={classVal} onClick={() => setOpenPopup(!openPopup)}>{btnVal}</button>
            </>
        )
    }

    return(
        <>
            {renderButton(btnVal, classVal)}
            {renderPopup()}

        </>
    )
}
export default Popup;