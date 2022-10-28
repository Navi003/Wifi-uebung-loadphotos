const { readdirSync, statSync } = require("fs");

const dataCollector = (folderPath = "first") => {
  const PATH = `./public/images/${folderPath}`;
  const fileNames = readdirSync(`${PATH}`);
  const fileInfos = [];

  for (const fileName of fileNames) {
    const fileStats = statSync(`${PATH}/${fileName}`);
    const fileInfo = {
      fileName,
      lastModified: fileStats.mtime,
      filesize: fileStats.size,
      pfad: `./images/${folderPath}/${fileName}`,
    };
    fileInfos.push(fileInfo);
  }
  console.log(fileInfos);
  return fileInfos;
};
dataCollector();
module.exports = dataCollector;
