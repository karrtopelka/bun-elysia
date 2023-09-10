import axios from 'axios';
import { generateCredentials, getDomain } from '../utils';

export type AuthorizeAppProps = {
  code: string;
};

export const authorizeApp = async ({ code }: AuthorizeAppProps) => {
  const credentials = generateCredentials();

  const redirectUri = `${getDomain()}/api/oauth/authorize`;

  const body = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
  };

  const headers = {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const response = await axios.post(Bun.env.PD__OAUTH_URL!, body, {
    headers,
  });

  return response;
};
