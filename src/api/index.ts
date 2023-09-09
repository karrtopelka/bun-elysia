import { Elysia } from 'elysia';

import manifestRouter from './manifest';
import oauthRouter from './oauth';
import { mainPage } from '../handlers';

const router = new Elysia({ prefix: 'api' }).use(manifestRouter).use(oauthRouter);

router.get('/', ({ headers: { host } }) => mainPage(host));

export default router;
