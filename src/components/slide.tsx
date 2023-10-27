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
        position: "left" | "right";
        id: "1" | "2"
    };
    function Slide(props: SlideProps) {
        return <button id={props.id} onClick={switchComponent} className={`bg-zinc-500 hover:bg-zinc-50 w-12 h-screen opacity-30 ${props.position}-0 absolute`}><img id={props.id} className="opacity-100" src={`./slide-${props.position}.svg`} alt={`slide ${props.position}`} /></button>
    }

    return (
        <div>
            <Slide id="1" position="left" />
            <Slide id="2" position="right" />
        </div>
    )
}

export default Slide;
