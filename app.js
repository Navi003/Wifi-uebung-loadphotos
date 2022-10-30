const express = require("express");
// const fs = require("fs/promises");
const collector = require("./genratedata.js");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", express.static("./public"));
app.use("/photos", express.static("./public"));
app.use("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/images", async (req, res, next) => {
  console.log(req.query);
  const photos = await collector(req.query.folder);
  // console.log(typeof photos)
  // console.log(data);
  res.status(200).json({
    message: "ok",
    data: photos,
  });
});
app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
