import { useState } from "react";

const Toggle = () => {
    const [isAnimating, setIsAnimating] = useState(true);

    function switching() {
        isAnimating ? setIsAnimating(false) : setIsAnimating(true)
        
    }

    return(
        <div className="flex items-center justify-center h-screen">
            <button onClick={switching} className="bg-zinc-400 w-72 h-32 shadow-2xl shadow-black rounded-full relative">
                <p className={`bg-none w-72 h-32 outline outline-cyan-500 outline-offset-8 top-0 absolute rounded-full duration-200 transform ${isAnimating ? "clip-path-onToggle" :"clip-path-offToggle"}`} />
                <button className={`bg-zinc-800 w-24 h-24 shadow-2xl shadow-black rounded-full top-4 left-4 absolute duration-200 transform ${isAnimating ? "translate-x-0" : "translate-x-40"}`} />
            </button>
        </div>
    )
}

export default Toggle;
