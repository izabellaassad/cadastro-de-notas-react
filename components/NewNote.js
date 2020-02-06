import React from "react"

export default class NewNote extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ""

        }
    }

    onChange(event) {
        console.log(event.target.value)
        this.setState({
            text: event.target.value

        })
    }



    onAddNote(e) {
        this.setState({ text: e }, () => {
            this.props.onAddNote(e)
        })

    }

    render() {
        // const { onAddNote } = this.props
        const { } = this.state

        return (
            <div className="new-note">
                <input
                    type="text"
                    className="new-note__input"
                    placeholder="Digite sua nota aqui..."
                    value={this.state.text}
                    onChange={e => this.onChange(e)}
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            this.onAddNote(event.target.value)
                            this.setState({
                                text: "",

                            })
                        }
                    }}
                />
            </div>
        )
    }
}