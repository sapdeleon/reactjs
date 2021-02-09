// 421. - useState Hook Exercise

import React, { useState } from "react";

function App() {

    const t = new Date().toLocaleTimeString();

    const [time, setTime] = useState(t);

    const updateTime = () => {
        const tt = new Date().toLocaleTimeString();
        setTime(tt);
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    );
}

export default App;