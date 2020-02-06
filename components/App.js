import React from "react"
import NoteList from "./NoteList"
import NewNote from "./NewNote"



export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: [
                { id: 1, text: "Teste 1" },
                { id: 2, text: "Teste 2" },
                { id: 3, text: "Teste 3" },
                { id: 4, text: "Teste 4" },
                { id: 5, text: "Teste 5 " },


            ],

        }
    }

    handleAddNote(value) {

        let newNotes = [...this.state.notes]
        newNotes.push(value)
        this.setState({
            notes: newNotes
        })
    };

    handleMove(direction, id) {
        const newNotes = [...this.state.notes]
        // let aux;
        newNotes.slice(id)
        const removeNotes = newNotes.splice(id, 1)[0]





        if (direction === "up") {

            // aux = newNotes[id - 1]
            // newNotes[id - 1] = newNotes[id]
            // newNotes[id] = aux;
            newNotes.splice(id - 1, 0, removeNotes)

        }
        else {
            newNotes.splice(id + 1, 0, removeNotes)

            // aux = newNotes[id + 1]
            // newNotes[id + 1] = newNotes[id]
            // newNotes[id] = aux;
        }
        this.setState({
            notes: newNotes


        })

    }


    handleDelete(id) {

        const newNotes = [...this.state.notes]
        newNotes.slice(id)
        const index = newNotes.findIndex(note => note.id === id)
        newNotes.splice(index, 1)
        return this.setState({ notes: newNotes })

    }


    render() {
        return (
            <div className="container">
                <NewNote notes={this.state.notes} onAddNote={e => this.handleAddNote(e)} />
                {<NoteList notes={this.state.notes} onMove={this.handleMove.bind(this)} onDelete={this.handleDelete.bind(this)} />}
            </div>
        )
    }
}
