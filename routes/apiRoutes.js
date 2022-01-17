const router = require("express").Router();
const path = require("path");



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
        //res.writeHead()
        res.end(`${newSavedNotes}`)
       
    })
})


module.exports = router;


