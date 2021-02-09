import React, { useState } from "react";

function Event() {

    const [name, setName] = useState("");
    const [headingText, setHeadingText] = useState("");
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleClick = () => setHeadingText(name);

    const handleChange = (event) => setName(event.target.value);

    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <div className="container">
            <h1>Hello, {headingText}</h1>
            <input
                onChange={handleChange} value={name}
                type="text" placeholder="What's your name?" />
            <button onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ backgroundColor: isMouseOver ? "black" : "white" }}
            >Submit</button>
        </div>
    );
}

export default Event;