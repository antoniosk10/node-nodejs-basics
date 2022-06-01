import { writeFile } from "fs";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const create = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const filePath = join(__dirname, "files/fresh.txt");

  writeFile(filePath, "I am fresh and young", { flag: "wx" }, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

create();
