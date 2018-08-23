import React from 'react';
import AddNoteTrial from './AddNoteTrial';
import NotesTrial from './NotesTrial';
import HeaderTrial from './HeaderTrial';
import FooterTrial from './FooterTrial';


export default class NotehiTrial extends React.Component {
  state = {
    notes: ['Try writing notes on the browser as much as you like, without log in, saving the notes in your browser history.','Login with google, to save new notes on the cloud.']
  };


  handleDeleteNote = (noteToDelete) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => noteToDelete !== note)
    }));
  };


  handleAddNote = (note) => {
    if (!note) {
      return 'Enter note content';
    } else if (this.state.notes.indexOf(note) > -1) {
      return 'This note already exists';
    }

    this.setState((prevState) => ({
      notes: prevState.notes.concat(note)
    }));
  };

  handleEditNote = (optionToEdit,index) => {
   
    let notes = [...this.state.notes];     // create the copy of state array
    notes[index] = optionToEdit;          //new value
    this.setState({ notes });            //update the value
  };


  componentDidMount() {
    try {
      const json = localStorage.getItem('notes');
      const notes = JSON.parse(json);

      if (notes) {
        this.setState(() => ({ notes }));
      }
    } catch (e) {
      // Do nothing
    }
  }


  componentDidUpdate(prevProps, prevState) {
      const json = JSON.stringify(this.state.notes);
      localStorage.setItem('notes', json);
  }


  componentWillUnmount() {
//Future use
  }


  
  render() {

    return (
      <div>
<div className="Site">
        <HeaderTrial />
        <div className="Site-content">
        <div className="container">
          <div className="widget">
            <AddNoteTrial
            handleAddNote={this.handleAddNote}
            />
            <NotesTrial
              notes={this.state.notes}
              handleDeleteNote={this.handleDeleteNote}
              handleEditNote={this.handleEditNote}
            />
          </div>
          </div>
</div>
        <FooterTrial />
        </div>
      </div>
    );
  }
}
