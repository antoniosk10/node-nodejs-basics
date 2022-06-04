import crypto from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const calculateHash = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const filePath = join(__dirname, "files/fileToCalculateHashFor.txt");
  const data = await readFile(filePath, { encoding: "utf-8" });
  return crypto.createHash("sha256").update(data).digest("hex");
};

console.log(await calculateHash());
