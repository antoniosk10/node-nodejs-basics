import { unlink } from "fs";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const remove = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathFileToRemove = join(__dirname, "files/fileToRemove.txt");

  unlink(pathFileToRemove, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

remove();
