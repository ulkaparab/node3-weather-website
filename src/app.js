const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewsDirPath = path.join(__dirname, "../templates/views");
const partialsDirPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsDirPath);
hbs.registerPartials(partialsDirPath);

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("", {
    title: "Weather ....",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me...!!!",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Need to provide address",
    });
  }

  res.send({
    place: "philadelphia",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help article NOT FOUND...!!!",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
