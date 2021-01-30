import React from "react"

function Hello() {
    let message = "Try Me";
    const date = new Date();
    const hour = date.getHours();
    const time = date.toLocaleTimeString();
    const today = date.toLocaleDateString();

    const customStyle = {
        color: "red"
    };

    if (hour < 12) {
        message = "Good Morning!";
        customStyle.color = "green";
    } else if (hour < 18) {
        message = "Good Afternoon!";
        customStyle.color = "blue";
    } else {
        message = "Good Evening!";
        customStyle.color = "yellow";
    }

    return (
        <div>
            <h1 style={customStyle}>{message}</h1>
            <p>Today is {today}, {time}</p>
        </div>
    );
}

export default Hello;