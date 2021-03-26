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

app.get("/", async (req, res) => {
  try {
    const contacts = await db.any("SELECT * FROM contacts;", [true]);
    console.log({ contacts });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
