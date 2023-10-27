import { StateProvider } from "./components/stateContext";
import Slide from "./components/slide";

function App() {

  return (
    <StateProvider>
      <div className='bg-zinc-800 text-white h-screen'>
        <Slide />
      </div>
    </StateProvider>
  )
}

export default App;
