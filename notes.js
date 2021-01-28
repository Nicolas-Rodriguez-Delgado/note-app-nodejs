const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  saveNotes(notesToKeep);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green("Note removed!"));
  } else {
    console.log(chalk.red("Note not found!"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(chalk.yellow("Title: " + note.title));
    console.log(chalk.green("Body: " + note.body));
  });
};

const readNote = title => {
    const notes = loadNotes();
    const noteByTitle = notes.find(note => note.title === title);

    if(noteByTitle) {
        console.log(chalk.green("Title: " + noteByTitle.title))
        console.log("Body: " + noteByTitle.body)
    } else {
        console.log(chalk.red("No note found!"))
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
