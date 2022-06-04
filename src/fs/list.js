import { readdir } from "fs";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const list = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathToFileFolder = join(__dirname, "files");

  readdir(pathToFileFolder, (err, files) => {
    if (err) throw new Error("FS operation failed");

    console.log(files);
  });
};

list();
