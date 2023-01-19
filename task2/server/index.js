require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.log("Error conneting to MySQL");
    return;
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Lokman Backend");
});

app.get("/notes", (req, res) => {
  db.query("SELECT * FROM notes", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "An error occured while fetching notes" });
    } else {
      res.status(200).send({ data: rows });
    }
  });
});

app.post("/notes", (req, res) => {
  const { notetitle, notebody } = req.body;
  const sqlInsert = "INSERT INTO notes (notetitle, notebody) VALUES (?,?)";
  db.query(sqlInsert, [notetitle, notebody], (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ error: "An error occured while creating new note" });
    }
    return res.status(201).send({ data: { id: result.insertId } });
  });
});

app.put("/notes/:id", (req, res) => {
  const sqlUpdate = "UPDATE notes SET ? where id = ?";
  db.query(sqlUpdate, [req.body, req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "An error occured while updating a note" });
    } else if (result.affectedRows === 0) {
      res.status(404).send({ error: "Note not found" });
    } else {
      res.status(200).send({ message: "Note updated" });
    }
  });
});

app.delete("/notes/:id", (req, res) => {
  db.query("DELETE FROM notes WHERE id = ?", [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ error: "An error occured while deleting the note" });
    } else {
      res.status(200).send({ message: "Note deleted succesfully" });
    }
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
