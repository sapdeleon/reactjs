import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes.js";

//function createNote(note) {
//	return (
//		<Note
//			key={note.key}
//			title={note.title}
//			content={note.content}
//		/>
//	);
//}

function Keeper() {
	return (
		<div>
			<Header />
			{notes.map(note => (
				<Note
					key={note.key}
					title={note.title}
					content={note.content}
				/>
			))}
			<Footer />
		</div>
	);
};

export default Keeper;