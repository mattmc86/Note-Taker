
const util = require("util");	
const fs = require("fs");
const uniqueID = require('uniqid'); 

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Db {
  readDbJson = () => {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeDbJson = (note) => {
      return writeFileAsync('db/db.json', JSON.stringify(note))
  }

  getAllNotes = () => {
    return this.readDbJson().then((note) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(note));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }

 
postNote = (note) =>{
    const { title, text } = note

    if(!title || !text){
      throw new Error('Include title and text')
    }

    const addNote = {
        title,
        text,
        id: uniqueID(),
    }

    return this.getAllNotes()
        .then((note) => [...note, addNote])
        .then((newNote) => {this.writeDbJson(newNote)})
        .then(() => 
        addNote,
        console.log("added new note"))
}
 
  deleteNote = (id) => {
    return this.getAllNotes()
    .then((notes) =>
        notes.filter((note) => note.id !== id)
    )
    .then((filteredArray) => this.writeDbJson(filteredArray))
}

}

module.exports = new Db();


