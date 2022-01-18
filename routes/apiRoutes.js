
const router = require("express").Router();
const noteData = require("../db/data");

router.get("/api/notes", (req, res) => {
  console.log("get request called");

  noteData.getAllNotes().then((notes) => {
    return res.json(notes);
  });
});

router.post("/api/notes", (req, res) => {
  console.log("post request called");
  noteData
    .postNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete("/api/notes/:id", (req, res) => {
  console.log("delete request called");
  const id = req.params.id;
  noteData
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true, Response: "Successful" }))
    .catch((error) => res.json(error));
});

module.exports = router;
