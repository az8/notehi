import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startEditNote } from '../actions/notes';

export class EditNote extends React.Component {
  onSubmit = (note) => {
    this.props.startEditNote(this.props.note.id, note);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="container">
        <div className="widget">
          <NoteForm
            note={this.props.note}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  note: state.notes.find((note) => note.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditNote: (id, note) => dispatch(startEditNote(id, note))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
