import { createReadStream, createWriteStream, unlink } from "fs";
import { join } from "path";
import { pipeline } from "stream";
import zlib from "zlib";
import getGlobalVariables from "../global.js";

export const compress = async () => {
  const gzip = zlib.createGzip();
  const { __dirname } = getGlobalVariables(import.meta.url);
  const filePath = join(__dirname, "files/fileToCompress.txt");
  const archivedFilePath = join(__dirname, "files/archive.gz");
  const input = createReadStream(filePath, "utf-8");
  const output = createWriteStream(archivedFilePath);

  pipeline(input, gzip, output, (err) => {
    if (err) throw new Error("Something went wrong");
    unlink(filePath, (err) => {
      if (err) throw new Error("FS operation failed");
    });
  });
};

compress();
