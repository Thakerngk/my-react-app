import React from "react";

/* function Greeting() {
    let isMorning = (new Date()).getHours() < 12;
    return  isMorning 
    ? (
        <>
            <h3>Good Morning!</h3>
            <p>You have 5 new messages</p>
        </>
    ) 
    : (
        <div>
            <h3>Good Evening!</h3>
            <p>You have 5 new messages</p>
        </div>
    ) 
}

export default Greeting; */
export const Greeting = ({name,numberOfMessages}) =>{
    //console.log(props);
    //let {name, numberOfMessages} = props;
    if (!name) return null;

    let isMorning = (new Date()).getHours() < 12;
    let greetingMessage = isMorning
        ? <h3>Good Morning! {name}</h3>
        : <h3>Good Evening! {name}</h3>;
    return (
        <>
            {greetingMessage}
            {numberOfMessages === 0
                ? null
                : <p>You have {numberOfMessages} new messages</p>
            }
            {/* <p>You have {numberOfMessages} new messages</p> */}
        </>
    );
/*     return isMorning
    ? (
        <>
            <h3>Good Morning!</h3>
            <p>You have 5 new messages</p>
        </>
    ) 
    : (
        <div>
            <h3>Good Evening!</h3>
            <p>You have 3 new messages</p>
        </div>
    );  */
}