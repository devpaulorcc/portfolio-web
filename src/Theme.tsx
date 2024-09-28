import { useState } from "react";
import './css/themeB.css'; 
import './css/themeW.css'; 

function Theme() {
    const [theme, setTheme] = useState("B");
    // const [icon, setIcon] =

    function changeTheme() {
        if (theme == "W") {
            document.body.classList.add("themeW");
            document.body.classList.remove("themeB"); 
            console.log("Preto aplicado", theme);
            setTheme("B"); 
        } else {
            document.body.classList.add("themeB");
            document.body.classList.remove("themeW"); 
            console.log("Branco aplicado", theme);
            setTheme("W");
        }
    }

    return (
        <button onClick={changeTheme} style={{ fontSize: '24px', padding: '10px', cursor: 'pointer' , color: "#fff"}}>
            {theme === "W" ? (
                <i className="fas fa-moon font-white" style={{ color: 'white' }}></i> 
            ) : (
                <i className="fas fa-sun font-white" style={{ color: 'white' }}></i>
            )}
        </button>
    );
}

export default Theme;
