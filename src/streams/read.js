import { pipeline } from "stream";
import { createReadStream } from "fs";
import getGlobalVariables from "../global.js";
import { join } from "path";

export const read = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathToFile = join(__dirname, "files/fileToRead.txt");
  pipeline(createReadStream(pathToFile), process.stdout, (err) => {
    if (err) throw new Error("Something went wrong");
  });
};

read();
