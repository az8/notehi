import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startAddNote } from '../actions/notes';


export class AddNote extends React.Component {


  onSubmit = (note) => {
    this.props.startAddNote(note);
  };
  render() {
    return (
          <NoteForm onSubmit={this.onSubmit} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: (note) => dispatch(startAddNote(note))
});

export default connect(undefined, mapDispatchToProps)(AddNote);
