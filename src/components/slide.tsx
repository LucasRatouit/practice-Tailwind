type SlideProps = {
    src: "left" | "right";
    id: "1" | "2"
    position: "left-0" | "right-0"
};

const Slide = ({ page, setPage }) => {
    function switchComponent(e) {
        const id = e.currentTarget.id
        if (id === "1" && page > 1) {
            setPage(page-1)
        } else if (id === "2" && page < 3 ) {
            setPage(page+1)
        }
    }

    function Slide(props: SlideProps) {
        return <button id={props.id} onClick={switchComponent} className={`bg-zinc-500 hover:bg-zinc-50 w-12 h-screen opacity-30 ${props.position} absolute`}><img id={props.id} className="opacity-100" src={`./slide-${props.src}.svg`} alt={`slide ${props.src}`} /></button>
    }

    return (
        <div>
            <Slide id="1" src="left" position="left-0" />
            <Slide id="2" src="right" position="right-0" />
            <p className="left-1/2 bottom-6 opacity-80 absolute">{page} / 3</p>
        </div>
    )
}

export default Slide;
