import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import Textarea from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.note ? props.note.title : 'DefaultTitle',
      notetext: props.note ? props.note.notetext : '',
      createdAt: props.note ? moment(props.note.createdAt) : moment(),
      error: ''
    };
  }


  onNotetextChange = (e) => {
    const notetext = e.target.value;
    this.setState(() => ({ notetext }));
  };



  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.notetext) {
      this.setState(() => ({ error: 'Please provide note.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        createdAt: this.state.createdAt.valueOf(),
        notetext: this.state.notetext
      });
    }

    this.setState(() => ({ notetext: '' })); //Empty note add form after adding note


  };
  render() {
    return (
      <div>
      {this.state.error && <p className="add-note-error">{this.state.error}</p>}
      <form className="add-note" onSubmit={this.onSubmit}>

      <Textarea
        className="add-note__input"
        type="text"
        name="note"
        placeholder="Write a note..." 
        value={this.state.notetext}
        onChange={this.onNotetextChange}
        />
        
        <button className="button2"><FontAwesomeIcon icon="save" /></button>
      </form>
      </div>
    )
  }
}

