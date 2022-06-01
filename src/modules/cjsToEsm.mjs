import { createServer as createServerHttp } from "http";
import { release, version } from "os";
import path from "path";
import getGlobalVariables from "../global.js";
import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };
import "./files/c.js";

const { __filename, __dirname } = getGlobalVariables(import.meta.url);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
