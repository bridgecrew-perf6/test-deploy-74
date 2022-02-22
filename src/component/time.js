import { useEffect, useRef, useState} from "react";

function Timer(params) {
    const [count, setCount] = useState(60);
    const [text, setText] = useState("");
    const timeId = useRef();
    const prevCount = useRef();
    console.log("render", count, timeId, text);
    useEffect(() => {
        prevCount.current = count;
        console.log("useEffect", prevCount.current, count);
    }, [count]);

    function handleStart() {
        if(timeId.current) 
            return;
        timeId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
            setText(prevText => prevText + count);
        }, 1000);
    }

    function handleStop() {
        clearInterval(timeId.current);
    }
    console.log("render1", count, prevCount.current, text);
     
    return (<div>
        <h1>{count}</h1>
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    </div>);
}

export default Timer;