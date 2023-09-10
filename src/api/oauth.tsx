import { Elysia, t } from 'elysia';
import { authorize, createChannel, deleteAuthorize } from '../handlers';
import { BaseHtml, htmlStyles, Button, Header, Subheader } from '../utils';
import cookie from '@elysiajs/cookie';

const router = new Elysia({ prefix: 'oauth' }).use(cookie());

router
  .model({
    'authorize.code': t.Object({ code: t.String() }),
  })
  .get(
    '/authorize',
    async ({ query: { code }, setCookie, set }) => {
      const data = await authorize(code);

      if (!data) {
        set.status = 400;
        return (
          <BaseHtml
            title='Error'
            children={
              <>
                <Header text='Error' />
                <Subheader text='An error occurred while authorizing' />
              </>
            }
          />
        );
      }

      setCookie('bearer', data.access_token, {
        maxAge: data.expires_in,
      });

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
      query: 'authorize.code',
    },
  );

router.delete('/authorize', async ({ set }) => {
  await deleteAuthorize();

  set.status = 200;
  return 'Deleted all users';
});

router.get(
  '/create-channel',
  async ({ cookie }) => {
    await createChannel(cookie.bearer);

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
    beforeHandle({ cookie, set }) {
      if (!cookie) {
        set.status = 400;
        set.headers['WWW-Authenticate'] = `Bearer realm='sign', error="invalid_request"`;

        return 'Unauthorized';
      }
    },
  },
);

export default router;
