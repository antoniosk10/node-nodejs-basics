import fs from "fs";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const rename = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathCurrentFile = join(__dirname, "files/wrongFilename.txt");
  const pathNewFile = join(__dirname, "files/properFilename.md");

  fs.rename(pathCurrentFile, pathNewFile, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

rename();
