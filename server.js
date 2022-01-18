// dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const savedNotes = require('./db/db.json');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app =express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT,() => console.log(`Listening on PORT ${PORT}`));