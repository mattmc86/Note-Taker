// dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const savedNotes = require('./db/db.json');
//TODO - reuqire API and HTML route files
const router = require('./routes')


const app =express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));



app.listen(PORT,() => console.log(`Listening on PORT ${PORT}`));