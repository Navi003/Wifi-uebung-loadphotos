const express = require("express");
// const fs = require("fs/promises");
const data = require("./genratedata.js");
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", express.static("./public"));
// app.use(express.static("./public"));
// app.use((req, res, next) => {
//   // console.log(req.method);
//   // console.log(req.params);
//   // console.log(req.query);
//   // console.log(req.baseUrl);
//   // console.log(req.param);
//   console.log(req.query);
// });

app.get("/images", (req, res, next) => {
  console.log(req.query);
  const photos = data(req.query.folder);
  res.status(200).json({
    message: "ok",
    data: photos,
  });
});

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
