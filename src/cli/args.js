export const parseArgs = () => {
  const options = process.argv.slice(2);
  console.log(
    options
      .filter((el) => el.match(/^--/))
      .reduce((acc, el) => {
        const parameterIndex = options.indexOf(el);
        return (
          acc +
          `${options[parameterIndex].slice(2)} is ${
            options[parameterIndex + 1]
          }, `
        );
      }, "")
  );
};

parseArgs();
