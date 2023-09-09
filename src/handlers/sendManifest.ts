import { generateManifest } from '../utils';

export const sendManifest = (host: null | string) => {
  const [hostname, port] = host ? host.split(':') : [];

  const manifest = generateManifest(hostname, Number(port));

  return manifest;
};
