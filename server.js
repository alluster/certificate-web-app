require('dotenv').config()
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;
var mysql = require('mysql');
var bodyParser = require('body-parser')

var pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  });
  pool.getConnection(function(err, connection) {
	if (err) throw err; // not connected!
	console.log("Connected to database 👍")
	// Use the connection
	// connection.query('SELECT id FROM users', function (error, results, fields) {
	//   // When done with the connection, release it.
	//   connection.release();
  
	//   // Handle error after the release.
	//   if (error) throw error;
  
	//   // Don't use the connection here, it has been returned to the pool.
	// });
  });
app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json())

    server.use(bodyParser.urlencoded({
      extended: true
    }));
   
    server.get('/profile', (req, res) => {
        console.log("Profile initialized 😙")
    })
    server.get('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});
