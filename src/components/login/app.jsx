import React from "react";
import Form from "./form";

var userIsRegistered = false;

function Login() {
    return (
        <div className="container">
            {userIsRegistered ? <h1>Welcome</h1> : <h1>Please Register</h1>}
            <Form isRegistered={userIsRegistered} />
        </div>
    );
}

export default Login;
