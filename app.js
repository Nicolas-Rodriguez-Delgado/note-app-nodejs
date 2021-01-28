const notes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Title of the note to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List the notes",
  handler() {
    notes.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "Read the notes",
  builder: {
      title: {
          describe: "title of the read note",
          demandOption: true,
          type: "string"
      }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
