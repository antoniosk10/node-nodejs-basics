import crypto from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";

export const calculateHash = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const filePath = join(__dirname, "files/fileToCalculateHashFor.txt");
  const data = await readFile(filePath, { encoding: "utf-8" });
  console.log(crypto.createHash("sha256").update(data).digest("hex"));
};

calculateHash();
