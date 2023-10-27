import { useStateContext } from "./stateContext";

function Slide() {
    const { idComponent, setIdComponent } = useStateContext();

    function switchComponent(e) {
        const id = e.target.id
        if (id === "1" && idComponent > 1) {
            setIdComponent(idComponent-1)
        } else if (id === "2") {
            setIdComponent(idComponent+1)
        }
    }

    type SlideProps = {
        src: "left" | "right";
        id: "1" | "2"
        position: "left-0" | "right-0"
    };
    function Slide(props: SlideProps) {
        return <button id={props.id} onClick={switchComponent} className={`bg-zinc-500 hover:bg-zinc-50 w-12 h-screen opacity-30 ${props.position} absolute`}><img id={props.id} className="opacity-100" src={`./slide-${props.src}.svg`} alt={`slide ${props.src}`} /></button>
    }

    return (
        <div>
            <Slide id="1" src="left" position="left-0" />
            <Slide id="2" src="right" position="right-0" />
        </div>
    )
}

export default Slide;
