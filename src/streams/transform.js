import { pipeline, Transform } from "stream";

export const transform = async () => {
  const transformStream = new Transform();
  transformStream._transform = (chunk, _, callback) => {
    callback(null, chunk.toString().trim().split("").reverse().join("") + "\n");
  };
  pipeline(process.stdin, transformStream, process.stdout, (err) => {
    if (err) throw new Error("Something went wrong");
  });
};

transform();
