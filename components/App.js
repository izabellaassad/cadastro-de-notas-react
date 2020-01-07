import React from "react";
import NoteList from "./NoteList";
import NewNote from "./NewNote";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],

        };
    }

    handleAddNote(value) {
        let newNotes = [...this.state.notes]
        newNotes.push(value)
        this.setState({
            notes: newNotes
        });
    };

    render() {
        return (
            <div className="container">
                <NewNote notes={this.state.notes} onAddNote={e => this.handleAddNote(e)} />
                <NoteList notes={this.state.notes} />
            </div>
        );
    }
}


