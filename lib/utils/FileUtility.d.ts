import fs from "fs";
declare class FileUtility {
    directoryExists: (dirName: fs.PathLike) => boolean;
    fileExists: (file: fs.PathLike) => boolean;
    writeToFile: (file: fs.PathLike, message: string) => void;
    createDirectory: (dirName: fs.PathLike) => void;
}
export declare const fileUtil: FileUtility;
export {};
