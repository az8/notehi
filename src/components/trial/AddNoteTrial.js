import React from 'react';
import Textarea from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class AddNoteTrial extends React.Component {
  state = {
    error: undefined
  };
  handleAddNote = (e) => {
    e.preventDefault();
    const note = e.target.elements.note.value.trim();
    const error = this.props.handleAddNote(note);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.note.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-note-error">{this.state.error}</p>}
        <form className="add-note" onSubmit={this.handleAddNote}>
          <Textarea className="add-note__input" type="text" name="note" placeholder="Write a note..." />
          <button className="button2"><FontAwesomeIcon icon="save" /></button>
        </form>
      </div>
    );
  }
}
