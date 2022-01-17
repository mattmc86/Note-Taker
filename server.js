// dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');


const app =express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

//add the routes for the html files
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

//add the route for json file
