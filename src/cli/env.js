export const parseEnv = () => {
  console.log(
    Object.keys(process.env)
      .filter((el) => el.match(/^RSS_/))
      .reduce((acc, el) => acc + `${el}=${process.env[el]}; `, "")
  );
};

parseEnv();
