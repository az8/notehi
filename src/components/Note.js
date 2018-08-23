import React from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { startRemoveNote } from '../actions/notes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Note extends React.Component {


onRemove = () => {
  this.props.startRemoveNote({ id: this.props.note.id });
};

render= () => { return (
  <div className="note">
    <Textarea className="note__text2" rows="1" contenteditable="false" >{this.props.note.notetext}</Textarea>
    <div className="alignbuttons">
    <Link to={`/edit/${this.props.note.id}`}><button className="button2 button2--link"><FontAwesomeIcon icon="edit" /></button></Link>
    <button className="button2 button2--link" onClick={this.onRemove}><FontAwesomeIcon icon="trash" /></button>
    </div>
  </div>
);
}
};

const mapStateToProps = (state, props) => ({
  note: state.notes.find((note) => note.id === props.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveNote: (data) => dispatch(startRemoveNote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);

