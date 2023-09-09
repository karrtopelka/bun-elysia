import { Elysia } from 'elysia';

import oauthRouter from './oauth';

const router = new Elysia({ prefix: 'api' }).use(oauthRouter);

router.get('/', () => {
  return 'Elysia API';
});

export default router;
