const fs = require("fs");
const util = require("util");
const uniqID = require('uniqID'); 

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Db {
    readDbJson =()=> {
        return readFileAsync("db/db.json", "utf-8")
    }
    writeData = (note) =>{
        return writeFileAsync("db/db.json", JSON.stringify(note))

    }

    getAllNotes(){
        return this.readDBjson().then((note)=>{
            let parsedNote 
            try {
                parsedNote = [].concat(JSON.parse(note))
            } catch (error) {
                parsedNote = [];
            }
        })
     
    }

    addNote(note){
        const {title, text } = note

        if(!title || !text){
            throw new Error('message')
        }

        const postNewNote = {
            title,
            text,
            id: uniqID
        }

        return this.getNotes()
        .then((note) => [...note, postNewNote])
        .then((updateNote) => { this.writeData(updateNote)})
        .then(() => postNewNote)
        
    }

    deleteNote(id){
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNote) => this.writeData(filteredNote))
    }

}

module.exports = new Db();