import { pipeline } from "stream";
import { createWriteStream } from "fs";
import getGlobalVariables from "../global.js";
import { join } from "path";

export const write = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathToFile = join(__dirname, "files/fileToWrite.txt");
  pipeline(process.stdin, createWriteStream(pathToFile), (err) => {
    if (err) throw new Error("Something went wrong");
    console.log("asd");
  });
};

write();
