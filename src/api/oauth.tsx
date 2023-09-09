import { Elysia, t } from 'elysia';
import { AuthorizeQuery, authorize, createChannel, deleteAuthorize } from '../handlers';
import bearer from '@elysiajs/bearer';
import { htmlReturn, htmlStyles } from '../utils';
import { AxiosError } from 'axios';

const router = new Elysia({ prefix: 'oauth' }).use(bearer());

router.get(
  '/authorize',
  async ({ query: { code }, set }) => {
    const data = await authorize(code);

    set.headers['Authorization'] = `Bearer ${data.access_token}`;
    set.status = 200;
    return htmlReturn({
      title: 'Authorized',
      data: (
        <>
          <h1 style={htmlStyles.header}>You're being authorized</h1>
          <p style={htmlStyles.subheader}>Now you have to create a channel, hit the button below</p>
          <a href='/api/oauth/create-channel'>
            <button style={htmlStyles.button}>Create Channel</button>
          </a>
        </>
      ),
    });
  },
  {
    query: AuthorizeQuery,
  },
);

router.delete('/authorize', async ({ set }) => {
  await deleteAuthorize();

  set.status = 200;
  return 'Deleted all users';
});

router.get(
  '/create-channel',
  async ({ bearer }) => {
    console.log('🚀 ~ file: oauth.tsx:53 ~ router.get ~ bearer:', bearer);

    // const data = createChannel(bearer);

    return htmlReturn({
      title: 'Channel created',
      data: (
        <>
          <h1 style={htmlStyles.header}>Channel created</h1>
          <p style={htmlStyles.subheader}>You can now use the app</p>
        </>
      ),
    });
  },
  {
    beforeHandle({ bearer, set }) {
      if (!bearer) {
        set.status = 400;
        set.headers['WWW-Authenticate'] = `Bearer realm='sign', error="invalid_request"`;

        return 'Unauthorized';
      }
    },
  },
);

export default router;
