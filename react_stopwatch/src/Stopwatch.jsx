
import React,{useState,useEffect,useRef} from "react";

function Stopwatch(){

    const [isRunning , setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const  internalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect( () => {

    },[isRunning])

    function start(){

    }
    function  reset(){

    }
    function stop(){

    }

    function formatTime(){
        return "00.00.00"
    }
    
    return(
        <div className="stopwatch">

            <div className="display">{formatTime()}</div>

            <div className="controls">
                <button onClick={start}  className="start_btn">Start</button>
                 <button onClick={reset}  className="reset_btn">Reset</button>
                  <button onClick={stop}  className="start_btn">Stop</button>
            </div>
            
        </div>
    )
}
export default Stopwatch;
