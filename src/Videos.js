import video1 from "./Videos/vid1.mp4"
import { forwardRef , useImperativeHandle,useRef} from "react"

function Videos(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref,()=> ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return (
        <video
            src={video1}
            ref={videoRef}
            width={300}
        />
    )
}
export default forwardRef(Videos)