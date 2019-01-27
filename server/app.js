const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/mainRoute");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.use("/movies", mainRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Resource not found" });
});

app.listen(8080, () => {
  console.info("App listening on port 8080");
});
