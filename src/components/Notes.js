import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import selectNotes from '../selectors/notes';

export const Notes = (props) => (
  <div>
      {
            props.notes.map((note) => {
              return <Note key={note.id} {...note} />;
            })   
      }
  </div>
);

const mapStateToProps = (state) => {
  return {
    notes: selectNotes(state.notes, state.filters)
  };
};

export default connect(mapStateToProps)(Notes);
