import React from "react";

const NoteList = ({ notes }) => (
    <div className="note-list">
        {notes.map((note, id) => (
            <div key={id} className="note">{note}</div>
        ))}
    </div>
);

export default NoteList;