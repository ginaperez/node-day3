const express = require('express');
const app = express();
const massive = require("massive");
require('dotenv').config()
app.use(express.json());
const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        console.log("database connected");
        app.set("db", dbInstance)
});

app.get("/api/students", (req, res, next) => {
    const db = req.app.get("db");
    db.get_all_students().then(students => {
        res.status(200).send(students);
    });
});

app.post("/api/students", (req, res, next) => {
    const db = req.app.get("db");
    const { student, cohort, campus_id } = req.body;
    db.create_student([student, cohort, campus_id]).then(students => {
        res.status(200).send(students);
    });
});

app.put("/api/student/:id", (req, res, next) => {
    const { cohort } = req.query;
    const { id } = req.params;
    const db = req.app.get("db");
    db.update_student([cohort, id]).then(students => {
        res.status(200).send(students);
    });
});

app.delete("/api/student/:id", (req, res, next) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_student(id).then(students => {
        res.status(200).send(students);
    });
});

const port = 4000;
app.listen(port, () => console.log(`server listening on port ${port}`));