const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const UserRoute = require("./routes/users.routes");

const PORT = 8000;
const app = express();

//Enabling CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//LOGGING INCOMING/OUTGOING REQUESTS
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const timeElapsed = Date.now() - start;
  console.log(
    `URL:${req.baseUrl}${req.url} METHOD: ${req.method} Time Elapsed: ${timeElapsed}`
  );
});

//ROUTES
app.use("/users", UserRoute);
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
