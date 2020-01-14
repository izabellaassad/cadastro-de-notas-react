import React from "react";
import classNames from "classnames";


const NoteList = ({ notes, onMove }) => (
    <div className="note-list">
        {notes.map((note, id) => (
            <div key={note.id} className="note">
                <span className="note_text">{`${note.id} - ${note.text}`}</span>
                <button className={classNames("button", {
                    "hidden": id === 0
                })}
                    onClick={() => {
                        onMove("up", id);
                    }}>
                    <i className="material-icons">arrow_upward</i></button>

                <button className={classNames("button", {
                    "hidden": id === notes.length - 1
                })}
                    onClick={() => {
                        onMove("down", id);
                    }}>
                    <i className="material-icons">arrow_downward</i>
                </button>


            </div>


        ))}
    </div>
);

export default NoteList;