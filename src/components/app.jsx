import React from "react";
import Hello from "./hello";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

function App() {
    return (
        <div>
            <Header />
            <Hello />
            <Note />
            <Footer />
        </div>
    );
};

export default App;