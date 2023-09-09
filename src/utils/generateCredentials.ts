export const generateCredentials = () => {
  const credential_value = `${Bun.env.CLIENT_ID}:${Bun.env.CLIENT_SECRET}`;

  const credentials = btoa(credential_value);

  return credentials;
};
