import React from "react"
import classNames from "classnames"

export default class Note extends React.Component {

    constructor() {
        super()
        this.state = {
            isEditing: false
        }
    }


    handleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }



    render() {

        const { id, note, onDelete, onMove, total } = this.props
        const { isEditing } = this.state

        return (
            <div key={id} className="note">
                {isEditing ? (<input type="text" />) : (
                    <span className="note_text">{`${note.id} - ${note.text}`}</span>)}
                <button className={classNames("button", {
                    "hidden": id === 0
                })}
                    onClick={() => {
                        onMove("up", id)
                    }}>m
                    <i className="material-icons">arrow_upward</i></button>

                <button className={classNames("button", {
                    "hidden": id === total - 1
                })}
                    onClick={() => {
                        onMove("down", id)
                    }}>
                    <i className="material-icons">arrow_downward</i>
                </button>

                <button
                    onClick={() => {
                        this.handleEdit()
                    }}>
                    <i className="material-icons">edit</i>
                </button>

                <button
                    onClick={() => {
                        onDelete(note.id)
                    }}>
                    <i className="material-icons">delete</i>
                </button>

            </div>

        )
    }

}
