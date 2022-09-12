export const handler = (percentage: number, message: string, ...args: string[]) => {
  // e.g. Output each progress message directly to the console:
  console.info((percentage * 100).toFixed(2) + "%", message, ...args);
  if (percentage === 1) {
    console.info('DONE: ' + new Date().toLocaleString());
  }
};
