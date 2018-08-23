import database from '../firebase/firebase';

// ADD_NOTE
export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const startAddNote = (noteData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      notetext = '',
      createdAt = 0
    } = noteData;
    const note = { title, notetext, createdAt };

    return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
      dispatch(addNote({
        id: ref.key,
        ...note
      }));
    });
  };
};

// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
});

export const startRemoveNote = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
      dispatch(removeNote({ id }));
    });
  };
};

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});

export const startEditNote = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/notes/${id}`).update(updates).then(() => {
      dispatch(editNote(id, updates));
    });
  };
};

// SET_NOTES
export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});

export const startSetNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
      const notes = [];

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setNotes(notes));
    });
  };
};