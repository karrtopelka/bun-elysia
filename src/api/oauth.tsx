import { Elysia, t } from 'elysia';
import { AuthorizeQuery, authorize, createChannel, deleteAuthorize } from '../handlers';
import bearer from '@elysiajs/bearer';
import { BaseHtml, htmlStyles, Button, Header, Subheader } from '../utils';

const router = new Elysia({ prefix: 'oauth' }).use(bearer());

router.get(
  '/authorize',
  async ({ query: { code }, set }) => {
    const data = await authorize(code);

    set.headers['Authorization'] = `Bearer ${data.access_token}`;
    set.status = 200;

    return (
      <BaseHtml
        title='Authorized'
        children={
          <>
            <Header text="You're being authorized" />
            <Subheader text='Now you have to create a channel, hit the button below' />
            <Button link='/api/oauth/create-channel' text='Create channel' />
          </>
        }
      />
    );
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

    return (
      <BaseHtml
        title='Channel created'
        children={
          <>
            <h1 style={htmlStyles.header}>Channel created</h1>
            <p style={htmlStyles.subheader}>You can now use the app</p>
          </>
        }
      />
    );
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
