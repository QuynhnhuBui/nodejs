const fs = require("fs");
const chalk = require('chalk');
const { title } = require("process");
const getNote = function () {
  return "Your notes ...";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.find((note) => {
    return note.title === title;
  });

if (!duplicateNotes) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('New note added!')
} else {
    console.log('Note title taken!')
}
};

const readNote = (title) =>{
    const notes = loadNotes()
    const selectedNotes = notes.find((note)=>{
        return note.title === title
    })
    if(selectedNotes){
        console.log(chalk.green.inverse(selectedNotes.title))
        console.log(selectedNotes.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))

    }
}

const removeNote = function (title) {
  notes = loadNotes();
  const noteToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(noteToKeep);
};

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.red.inverse('Your note'))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
  
};
