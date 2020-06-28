import fs from "fs";

class FileUtility {
  directoryExists = (dirName: fs.PathLike) => {
    return fs.existsSync(dirName);
  };

  fileExists = (file: fs.PathLike): boolean => {
    return fs.existsSync(file);
  };

  writeToFile = (file: fs.PathLike, message: string) => {
    fs.appendFileSync(file, message);
  };

  createDirectory = (dirName: fs.PathLike) => {
    fs.mkdirSync(dirName);
  };
}
export const fileUtil = new FileUtility();
