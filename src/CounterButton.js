//import React, { useState } from "react";
import React,{ useEffect } from "react";

export const CounterButton = ({ onIncrement,numberOfClicks }) => {
    // const [numberOfClicks, setNumberOfClicks] = useState(0);

    // const increment = () => setNumberOfClicks(numberOfClicks + 1);
    useEffect(() => {
        console.log('useEffect function called!');

        return () => console.log('unmounting');
    },[]);
    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click Me!</button>
        </>
    )
}