
// Get visible notes

export default (notes, { text, sortBy }) => {
    return notes.filter((note) => {
  
      const textMatch = note.title.toLowerCase().includes(text.toLowerCase());
  
      return textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } 
    });
  };
  