const express = require("express");
// const fs = require("fs/promises");
const collector = require("./genratedata.js");
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/home", express.static("./home"));
app.use("/", express.static("./public"));
app.use("/photos", express.static("./public"));

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

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
