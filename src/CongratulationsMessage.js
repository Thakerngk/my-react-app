import React, { useEffect } from "react";

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) => {
    useEffect(() => {
        console.log('CongratulationsMessage unmounting!');
    }, [numberOfClicks]);
    return numberOfClicks >= threshold
        ?
        <>
            <h1>Congratulations! You've reached {threshold} number</h1>
            <button onClick={onHide}>Hide message!</button>
        </> 
        : null;
}