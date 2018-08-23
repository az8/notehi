import React from 'react';
import NoteTrial from './NoteTrial';
import uuid from 'uuid';

const NotesTrial = (props) => (
  <div>
    {
      props.notes.map((noteobj, index) => (
        <NoteTrial
          key = {uuid()}
          optionText={noteobj}
          count={index + 1}
          index={index}
          handleDeleteNote={props.handleDeleteNote}
          handleEditNote={props.handleEditNote}
        />
      ))
    }
  </div>
);

export default NotesTrial;