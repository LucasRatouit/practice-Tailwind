import { useState } from "react";
import "./toolKit.css";

const ToolKit = () => {
    const [settingHover, setSettingHover] = useState<string>("w-32 h-32");
    const [toolkitShadow, setToolkitShadow] = useState("w-32 h-32");
    const [toolkitButton, setToolkitButton] = useState("scale-0");
    const [toolkitRotate, setToolkitRotate] = useState("");

    const toolkitOnHover = () => {
        setSettingHover("toolkit-button-true");
        setToolkitShadow("toolkit-shadow-true");
    }

    const toolkitOnLeave = () => {
        setSettingHover("toolkit-button-false");
        setToolkitShadow("toolkit-shadow-false");
    }
    
    const toolKitClicked = () => {
        if (toolkitButton === "scale-0" || toolkitButton === "toolkit-false") {
            setToolkitButton("toolkit-true");
            setToolkitRotate("toolkit-rotate-true");
        } else {
            setToolkitButton("toolkit-false");
            setToolkitRotate("toolkit-rotate-false");
        }
    }

    type LinkProps = {
        height: string;
        width: string;
    }

    const Link = (props: LinkProps) => {
        return <button className={`absolute ${props.height} ${props.width} translate-x-2 w-11 h-11`}><img src="./save.svg" /></button>
    }
    
    return (
        <div className="h-screen flex justify-center place-items-center">
            <button className={`z-10 flex justify-center bg-zinc-800 border-4 border-teal-500 ${settingHover} rounded-full`} onClick={toolKitClicked} onMouseEnter={toolkitOnHover} onMouseLeave={toolkitOnLeave}>
                <img className={`w-16 ${toolkitRotate}`} src="./setting.svg" />
            </button>
            <p className={`absolute w-32 h-32 ${toolkitShadow} bg-teal-500 opacity-50 rounded-full`}></p>
            <div className={`absolute w-80 h-80 ${toolkitButton} bg-teal-500 rounded-full`}>
                <Link height="top-6" width="left-32" />
                <Link height="bottom-6" width="left-32" />
                <Link height="top-24" width="left-6" />
                <Link height="bottom-24" width="left-6" />
                <Link height="top-24" width="right-11" />
                <Link height="bottom-24" width="right-11" />
            </div>
        </div>
    )
}

export default ToolKit;
