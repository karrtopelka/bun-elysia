import axios from 'axios';
import { generateCredentials } from '../utils';

export type AuthorizeAppProps = {
  code: string;
};

export const authorizeApp = async ({ code }: AuthorizeAppProps) => {
  const credentials = generateCredentials();

  const body = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: `${Bun.env.API_URL}/oauth/authorize`,
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
