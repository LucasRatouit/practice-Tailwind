import { useState } from "react";
import "./previewImages.css";

const PreviewImages = () => {
    const [animPreviousPreviousImage, setAnimPreviousPreviousImage] = useState("");
    const [animPreviousImage, setAnimPreviousImage] = useState("");
    const [animCurrentImage, setAnimCurrentImage] = useState("");
    const [animNextImage, setAnimNextImage] = useState("");
    const [animNextNextImage, setAnimNextNextImage] = useState("");
    const [currentImg, setCurrentImg] = useState(0);

    const listImages = ["BanniereBeelzebuth.jpg", "BanniereBelze.jpg", "BanniereBubble.jpg", "BanniereBeelzebuth.jpg", "BanniereBelze.jpg", "BanniereBubble.jpg"];

    const onClickPreviousImage = () => {
        const img = currentImg
        if (currentImg !== listImages.length-3) {
            setAnimPreviousImage("previousToNull");
            setAnimCurrentImage("currentToPrevious");
            setAnimNextImage("nextToCurrent");
            setAnimNextNextImage("nullToNext");
            // 
            setTimeout(() => {
                setAnimPreviousImage("");
                setAnimCurrentImage("");
                setAnimNextImage("");
                setAnimNextNextImage("");
                setCurrentImg(img+1);
            }, 2000)
        }
    }

    const onClickNextImage = () => {
        const img = currentImg
        if (currentImg !== 0) {
            setAnimPreviousPreviousImage("nullToPrevious");
            setAnimPreviousImage("previousToCurrent");
            setAnimCurrentImage("currentToNext");
            setAnimNextImage("nextToNull");
            // 
            setTimeout(() => {
                setAnimPreviousPreviousImage("");
                setAnimPreviousImage("");
                setAnimCurrentImage("");
                setAnimNextImage("");
                setCurrentImg(img-1);
            }, 2000)
        }
    }

    return (
        <div className="h-screen flex justify-center place-items-center relative overflow-hidden">
            <img className={`z-0 absolute w-1/4 h-auto top-72 opacity-0 -translate-x-2/3 translate-y-1/4 ${animPreviousPreviousImage} cursor-pointer`} src={`./banniereList/${listImages[currentImg-1]}`} alt="" />
            <img onClick={onClickPreviousImage} className={`z-10 absolute w-1/4 h-auto top-72 opacity-25 -translate-x-2/3 translate-y-1/4 ${animPreviousImage} cursor-pointer`} src={`./banniereList/${listImages[currentImg]}`} alt="" />
            <img className={`z-20 absolute w-1/4 h-auto top-72 ${animCurrentImage}`} src={`./banniereList/${listImages[currentImg+1]}`} alt="" />
            <img onClick={onClickNextImage} className={`z-10 absolute w-1/4 h-auto top-72 opacity-25 translate-x-2/3 translate-y-1/4 ${animNextImage} cursor-pointer`} src={`./banniereList/${listImages[currentImg+2]}`} alt="" />
            <img className={`z-0 absolute w-1/4 h-auto top-72 opacity-0 translate-x-2/3 translate-y-1/4 ${animNextNextImage} cursor-pointer`} src={`./banniereList/${listImages[currentImg+3]}`} alt="" />
        </div>
    )
}

export default PreviewImages;
