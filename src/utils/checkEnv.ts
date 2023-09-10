export const checkEnv = (): void => {
  if (!Bun.env.CLIENT_ID) {
    throw new Error('CLIENT_ID is not defined');
  }

  if (!Bun.env.CLIENT_SECRET) {
    throw new Error('CLIENT_SECRET is not defined');
  }

  if (!Bun.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }

  if (!Bun.env.PD__API_URL) {
    throw new Error('PD__API_URL is not defined');
  }

  if (!Bun.env.PD__CHANNEL_ID) {
    throw new Error('PD__CHANNEL_ID is not defined');
  }

  if (!Bun.env.PD__CHANNEL_NAME) {
    throw new Error('PD__CHANNEL_NAME is not defined');
  }

  if (!Bun.env.PD__CHANNEL_TYPE) {
    throw new Error('PD__CHANNEL_TYPE is not defined');
  }

  if (!Bun.env.PD__SOURCE_USER) {
    throw new Error('PD__SOURCE_USER is not defined');
  }

  if (!Bun.env.PD__OAUTH_URL) {
    throw new Error('PD__OAUTH_URL is not defined');
  }

  if (!Bun.env.GCP_BUCKET_NAME) {
    throw new Error('GCP_BUCKET_NAME is not defined');
  }
};
