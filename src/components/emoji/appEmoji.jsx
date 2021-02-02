import React from "react";
import Term from "./emoji/term.jsx";
// must be located at src/components only
import emojipedia from "./emojipedia.js";

function createTerm(emoji) {
    return (
        <Term
            key={emoji.id}
            id={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
    );
};

// app.jsx for emoji - must be located at src/components/ only
function App() {

    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(createTerm)}
            </dl>
        </div>
    );
}

export default App;
