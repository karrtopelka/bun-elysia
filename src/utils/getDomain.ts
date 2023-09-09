export const getDomain = (hostname: string = 'localhost', port?: number) => {
  if (hostname === 'localhost') {
    return `http://${hostname}:${port}`;
  }

  return `https://${hostname}`;
};
