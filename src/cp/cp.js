import { fork } from "child_process";
import { join } from "path";
import getGlobalVariables from "../global.js";

export const spawnChildProcess = async (args) => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathToChildProcess = join(__dirname, "/files/script.js");
  fork(pathToChildProcess, args);
};

spawnChildProcess(process.argv.slice(2));
