export const getDomain = (hostname: string = 'localhost', port: number = 3000) => {
  if (hostname === 'localhost') {
    return `http://${hostname}:${port}`;
  }

  return `https://${hostname}`;
};
