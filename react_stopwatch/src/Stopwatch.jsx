
import React,{useState,useEffect,useRef} from "react";

function Stopwatch(){

    const [isRunning , setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect( () => {

        if (isRunning) {

            startTimeRef.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 100);
        }
        else {
            clearInterval(intervalIdRef.current);
        }

    return () => clearInterval(intervalIdRef.current);

    },[isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime
    }


    function  reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }


    function stop(){
        setIsRunning(false)
    }

    function formatTime(){

        const totalMilliseconds = elapsedTime;
        const seconds = Math.floor((totalMilliseconds / 1000) % 60);
        const minutes = Math.floor((totalMilliseconds / 60000) % 60);
        const hours = Math.floor(totalMilliseconds / 3600000);

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
        )}:${String(seconds).padStart(2, "0")}`;
        }
    
    return(
        <div className="stopwatch">

            <div className="display">{formatTime()}</div>

            <div className="controls">
                <button onClick={start}  className="start_btn">Start</button>
                 <button onClick={reset}  className="reset_btn">Reset</button>
                  <button onClick={stop}  className="stop_btn">Stop</button>
            </div>

        </div>
    )
}
export default Stopwatch;
