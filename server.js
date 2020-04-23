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
const SQL = require('sql-template-strings')
var sslRedirect = require('heroku-ssl-redirect');


 
  var pool = mysql.createPool({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: 'heroku_45c5f28302e7ba2'
  });
 


app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json())
	server.use(sslRedirect());
    server.use(bodyParser.urlencoded({
      extended: true
    }));
   
	server.get('/getcertification/:id', (req, res) => {
        pool.getConnection(function(err, connection) {

			if (err) throw err; 
			query = SQL`SELECT * FROM certifications WHERE id=${req.params.id}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});
	})
	
	server.get('/addcertification', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`INSERT INTO certifications (id, description, date, owner, url, username ) VALUES (${req.query.id}, ${req.query.description},${req.query.date},${req.query.owner},${req.query.url}, ${req.query.username})`
			connection.query(
				query,
				function (error, results, fields) {
				connection.release();
				if (error) throw error;
			});
		});

	})

	server.get('/getusercertifications', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`SELECT * FROM certifications WHERE owner=${req.query.owner}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});

	})
    server.get('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});
