const { readdir, stat } = require("fs/promises");

const dataCollector = async (folderPath = "first") => {
  const PATH = `./public/images/${folderPath}`;
  const fileNames = await readdir(`${PATH}`);

  const fileInfos = [];

  for (const fileName of fileNames) {
    const fileStats = await stat(`${PATH}/${fileName}`);
    const fileInfo = {
      fileName,
      lastModified: fileStats.mtime,
      filesize: fileStats.size,
      pfad: `./images/${folderPath}/${fileName}`,
    };
    fileInfos.push(fileInfo);
  }

  return fileInfos;
};
// dataCollector().then((data) => (module.exports = data));
// dataCollector();
module.exports = dataCollector;
