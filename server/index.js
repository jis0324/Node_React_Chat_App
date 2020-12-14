const express = require('express')();
const app = express;
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const socketEvents = require('./sockets/socketEvents');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const signupController = require('./controllers/signup')
const signinController = require('./controllers/signin')

// Set CORS
app.use(cors());

// Start the server
const http = require('http').createServer(app);

// set socket
const io = require('socket.io')(http);
socketEvents(io);

// Connect to the database
mongoose.connect(config.database);

http.listen(config.port, (req, res) => {
    console.log(`listening on *:${config.port}`);
});

app.post('/signup', jsonParser, signupController);
app.post('/signin', jsonParser, signinController);

// app.get('/single-chat', function (req, res) {
//     res.sendFile(__dirname + '/clients/single-chat.html');
// });
// app.get('/group-chat', function (req, res) {
//     res.sendFile(__dirname + '/clients/group-chat.html');
// });




