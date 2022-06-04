import { readFile } from "fs";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const read = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const filePath = join(__dirname, "files/fileToRead.txt");

  readFile(filePath, "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

read();
