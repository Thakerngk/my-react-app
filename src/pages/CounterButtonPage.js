import React,{useState} from "react";
import { useParams, useLocation } from "react-router-dom";
//import { parse } from "query-string";
import queryString from "query-string";
import { CounterButton } from "../CounterButton";
import { CongratulationsMessage } from "../CongratulationsMessage";

export const CounterButtonPage = () => {
    const location = useLocation();
    //const parsed = queryString.parse(location.search);
    const startingValue = queryString.parse(location.search).startingvalue;
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);   
  
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
    return (
        <>   
        <h1>The Counter Button Page</h1>
        {hideMessage 
        ? null 
        : <CongratulationsMessage 
            numberOfClicks={numberOfClicks} 
            threshold={10} 
            onHide={() => setHideMessage(true)}/>}
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>        
        </>
    );    
}