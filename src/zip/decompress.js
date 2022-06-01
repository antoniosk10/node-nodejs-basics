import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream";
import zlib from "zlib";
import getGlobalVariables from "../global.js";

export const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const { __dirname } = getGlobalVariables(import.meta.url);
  const filePath = join(__dirname, "files/fileToCompress.txt");
  const archivedFilePath = join(__dirname, "files/archive.gz");
  const input = createReadStream(archivedFilePath);
  const output = createWriteStream(filePath);

  pipeline(input, gunzip, output, (err) => {
    if (err) throw new Error("Something went wrong");
  });
};

decompress();
