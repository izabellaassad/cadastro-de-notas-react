
import React from "react"
import Note from './Note'

export default class NoteList extends React.Component {

    render() {

        const { notes, onMove, onDelete } = this.props
        return (
            <div className="note-list">
                {notes.map((note, id) => (
                    <Note
                        key={id}
                        note={note}
                        onMove={onMove}
                        onDelete={onDelete}
                        id={id}
                        total={notes.length}
                    />

                ))}
            </div>

        )

    }


}