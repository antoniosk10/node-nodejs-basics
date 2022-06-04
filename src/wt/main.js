import { join } from "path";
import { Worker } from "worker_threads";
import getGlobalVariables from "../global.js";
import { cpus } from "os";

export const performCalculations = async () => {
  const { __dirname } = getGlobalVariables(import.meta.url);
  const pathToWorker = join(__dirname, "worker.js");
  const N = 10;
  const listWorkers = [];

  cpus().forEach((_, index) => {
    listWorkers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, { workerData: N + index });
        worker.on("message", (res) =>
          resolve({
            status: "resolved",
            data: res,
          })
        );
        worker.on("error", () =>
          reject({
            status: "error",
            data: null,
          })
        );
      })
    );
  });
  Promise.allSettled(listWorkers).then((resultWorkers) =>
    console.log(resultWorkers.map((el) => (el.value ? el.value : el.reason)))
  );
};

performCalculations();
