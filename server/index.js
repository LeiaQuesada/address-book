const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.use(express.json());

const pgp = require("pg-promise")({});
const cn = {
  host: "localhost",
  port: 5432,
  database: "addressbook",
  user: "leiaque",
};

const db = pgp(cn);

// sends get request to pg
app.get("/", async (req, res) => {
  try {
    const contacts = await db.any("SELECT * FROM contacts;", [true]);
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
  }
});

// route to add data
app.post("/addcontact", async (req, res) => {
  try {
    const { first_name, last_name, phone_number, email } = req.body;
    const newContact = await db.one(
      `INSERT INTO contacts VALUES($1, $2, $3, $4) RETURNING *;`,
      [first_name, last_name, phone_number, email]
    );
    res.json(newContact.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
