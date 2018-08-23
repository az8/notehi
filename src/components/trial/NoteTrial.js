import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class NoteTrial extends React.Component {

  constructor(props){
    super(props);

    this.saveEdit = this.saveEdit.bind(this);
  }

  saveEdit(e){
    e.preventDefault();
    const note = e.target.value;
    const indi = this.props.index
    this.props.handleEditNote(note,indi);
  }

render(){
return (
  <div className="note">
    <TextareaAutosize
    className="note__text2"
    rows="1"
    name="rea"
    contentEditable="true"
    onBlur={this.saveEdit}
    index={this.props.index}
    >
    {this.props.optionText}
    </TextareaAutosize>

    <button
      className="button2 button2--link"
      onClick={(e) => {
        this.props.handleDeleteNote(this.props.optionText);
      }}
    >
      <FontAwesomeIcon icon="trash" />
      </button>    
  </div>
);
}
}
