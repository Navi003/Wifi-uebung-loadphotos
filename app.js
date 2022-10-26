const express = require("express");
// const fs = require("fs/promises");
const data = require("./genratedata.js");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("./public"));

app.get("/photos", (req, res, next) => {
  const photos = data();
  console.log(photos, "😍");
  res.json({
    message: "ok",
    data: photos,
  });
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
