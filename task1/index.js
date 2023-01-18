require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
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

app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM task", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "An error occured while fetching tasks" });
    } else {
      res.status(200).send({ data: rows });
    }
  });
});

app.post("/tasks", (req, res) => {
  const { tasktitle, taskdescription, taskstatus } = req.body;
  const sqlInsert =
    "INSERT INTO task (tasktitle, taskdescription, taskstatus) VALUES (?,?,?)";

  db.query(
    sqlInsert,
    [tasktitle, taskdescription, taskstatus],
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send({ error: "An error occured while creating a new task" });
      }
      return res.status(201).send({ data: { id: result.insertId } });
    }
  );
});

app.get("/tasks/:taskid", (req, res) => {
  db.query(
    "SELECT * FROM task WHERE taskid = ?",
    [req.params.taskid],
    (err, rows) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ error: "An error occured while fetching a task" });
      } else if (!rows.length) {
        res.status(404).send({ error: "Task not found" });
      } else {
        res.status(200).send({ data: rows[0] });
      }
    }
  );
});

app.put("/tasks/:taskid", (req, res) => {
  const sqlUpdate = "UPDATE task SET ? where taskid = ?";
  db.query(sqlUpdate, [req.body, req.params.taskid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "An error occured while updating a task" });
    } else if (result.affectedRows === 0) {
      res.status(404).send({ error: "Task not found" });
    } else {
      res.status(200).send({ message: "Task updated" });
    }
  });
});

app.delete("/tasks/:taskid", (req, res) => {
  db.query(
    "DELETE FROM task WHERE taskid = ?",
    [req.params.taskid],
    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ error: "An error occured while deleting the task" });
      } else {
        res.status(200).send({ message: "Task deleted succesfully" });
      }
    }
  );
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
