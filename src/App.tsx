import { useState } from "react";
import Slide from "./components/slide";
import Toggle from "./components/toggle";
import ToolKit from "./components/toolKit";
import PreviewImages from "./components/previewImages";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className='bg-zinc-800 text-white h-screen'>
      <Slide page={currentPage} setPage={setCurrentPage} />
      <h1 className={`flex font-bold text-7xl justify-center pt-80 ${currentPage === 1 ? "visible" : "hidden"}`}>Practice Tailwind :</h1>
      <div className={`${currentPage === 2 ? "visible" : "hidden"}`}><Toggle /></div>
      <div className={`${currentPage === 3 ? "visible" : "hidden"}`}><ToolKit /></div>
      <div className={`${currentPage === 4 ? "visible" : "hidden"}`}><PreviewImages /></div>
    </div>
  )
}

export default App;
