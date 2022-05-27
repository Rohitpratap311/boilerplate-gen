var sqlite3 = require("sqlite3").verbose();
var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database("./db/todo_app.db");
var path = require("path");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var cors = require("cors");
app.use(
	cors({
		origin: "*",
	})
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
app.use(helmet());

db.run(
	"CREATE TABLE IF NOT EXISTS todo(id INTEGER, text TEXT, completed BOOLEAN,PRIMARY KEY(id))"
);

app.get("/", function (req, res) {
	res.send("Hi there");
});

app.post("/todos", function (req, res) {
	console.log(req);
	db.serialize(() => {
		db.run(
			"INSERT INTO todo(text,completed) VALUES(?,?)",
			[req.body.text, req.body.completed],
			function (err) {
				if (err) {
					return console.log(err.message);
				}
				console.log("New employee has been added");
				res.send(
					"New employee has been added into the database with ID = " +
						"5" +
						" and text = " +
						req.body.text
				);
			}
		);
	});
});

app.get("/todos", async function (req, res) {
	const row = await new Promise((resolve, reject) => {
		db.all(`SELECT * FROM todo`, [], (err, row) => {
			if (err) {
				reject(err);
			}
			resolve(row);
		});
	});
	res.json(row);
});

app.put("/todos/:id", function (req, res) {
	db.serialize(() => {
		db.run(
			"UPDATE todo SET text = ? , completed = ? WHERE id = ?",
			[req.body.name, req.body.completed, req.params.id],
			function (err) {
				if (err) {
					res.send("Error encountered while updating");
					return console.error(err.message);
				}
				res.send("Entry updated successfully");
				console.log("Entry updated successfully");
			}
		);
	});
});

app.get("/todos/:id", function (req, res) {
	db.serialize(() => {
		db.run("DELETE FROM todo WHERE id = ?", req.params.id, function (err) {
			if (err) {
				res.send("Error encountered while deleting");
				return console.error(err.message);
			}
			res.send("Entry deleted");
			console.log("Entry deleted");
		});
	});
});

app.get("/close", function (req, res) {
	db.close((err) => {
		if (err) {
			res.send("There is some error in closing the database");
			return console.error(err.message);
		}
		console.log("Closing the database connection.");
		res.send("Database connection successfully closed");
	});
});

server.listen(5000, function () {
	console.log("Server listening on port: 5000");
});
