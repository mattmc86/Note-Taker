const router = require("express").Router();
const path = require("path");
const noteData = require('../db/database');

// router.get("/api/notes",(req,res)=>{
//     noteData.getAllNotes().then((notes)=>{
//         return res.json(notes);
//     })
// })

// router.post("/api/notes",(req,res)=>{
//     noteData
//     .postNote(req.body)
//     .then((note)=>res.json(note))
//     .catch((err)=>res.status(500).json(err))
// })



// module.exports = router;

router.get('/api/notes', (req,res) => res.json(savedNotes));

router.post('/api/notes',(req,res)=>{
    const newNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uniqID()
       
    }
    savedNotes.push(newNote);

    const newSavedNotes = JSON.stringify(savedNotes);
  
    //write new saved note to file
    fs.writeFile(`${__dirname}/db/db.json`,`${newSavedNotes}`,(err)=>{
        if (err) throw err;
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(`${newSavedNotes}`)
       
    })
})

//delete
// router.delete("/api/notes/:id", (req,res) =>{
//     const id = req.params.id;
//     noteData
//     .deleteNote(req.params.id)
//     .then(() => res.json({ok: true, Response: "Successful"}))
//     .catch((error)=> res.json(error));
// })


module.exports = router;





