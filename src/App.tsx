import { useStateContext } from "./components/stateContext";
import Slide from "./components/slide";
import Toggle from "./components/toggle";

function App() {
  const { idComponent } = useStateContext();

  return (
    <div className='bg-zinc-800 text-white h-screen'>
      <Slide />
      <div className={`${idComponent === 1 ? "visible" : "hidden"}`}><Toggle /></div>
    </div>
  )
}

export default App;
