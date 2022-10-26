const { readdirSync, statSync } = require("fs");

const PATH = `./public/images`;
console.log(PATH);
const dataCollector = () => {
  const fileNames = readdirSync(PATH);
  const fileInfos = [];

  for (const fileName of fileNames) {
    const fileStats = statSync(`${PATH}/${fileName}`);
    const fileInfo = {
      fileName,
      lastModified: fileStats.mtime,
      filesize: fileStats.size,
      pfad: `./images/${fileName}`,
    };
    fileInfos.push(fileInfo);
  }
  // console.log(fileInfos);
  return fileInfos;
};
dataCollector();
module.exports = dataCollector;
