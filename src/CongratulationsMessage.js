import React, { useEffect } from "react";

export const CongratulationsMessage = ({ threshold, onHide}) => {

    return (
        <>
            <h1>Congratulations! You've reached {threshold} number</h1>
            <button onClick={onHide}>Hide message!</button>
        </> 
        );
}