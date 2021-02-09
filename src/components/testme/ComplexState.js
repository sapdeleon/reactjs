// using Complex State
import React, { useState } from "react";

function App() {

    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFullName(prevValue => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                }
            } else if (name === "email") {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                }
            }
        });
    }

    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <p>{fullName.email}</p>
            <form>
                <input type="text" placeholder="First Name" name="fName"
                    value={fullName.fName} onChange={handleChange} />
                <input type="text" placeholder="Last Name" name="lName"
                    value={fullName.lName} onChange={handleChange} />
                <input type="text" placeholder="Email" name="email"
                    value={fullName.email} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;