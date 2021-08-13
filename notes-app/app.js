// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Nhuuuuu')

// fs.appendFileSync('notes.txt','Helloooo')
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

const command = process.argv[2];
//customize yargs verion
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add the new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove the note",
  builder:{
    title:{
      describe:"Note title",
      demandOption: true,
      type: String
    }
  },
  handler: function (argv) {
   notes.removeNote(argv.title)
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read the note",
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: String
    }
  },
  handler: function (argv) {
    notes.readNote(argv.title)
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List the note",
  handler: function () {
   notes.listNotes()
  },
});

// console.log(yargs.argv);

yargs.parse();
// if (command == 'add'){
//     console.log("Adding note")
// } else if (command == 'remove'){
//     console.log("removing")
// }
