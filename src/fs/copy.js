import { cp } from "fs";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const copy = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathToFileFolder = join(__dirname, "files");
  const pathToFileCopyFolder = join(__dirname, "files_copy");

  cp(
    pathToFileFolder,
    pathToFileCopyFolder,
    { recursive: true, errorOnExist: true, force: false },
    (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    }
  );
};

copy();
