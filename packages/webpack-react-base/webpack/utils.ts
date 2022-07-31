export const handler = (
  percentage: number,
  message: string,
  ...args: string[]
) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage.toFixed(2), message, ...args);
};
