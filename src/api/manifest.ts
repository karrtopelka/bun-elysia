import { Elysia } from 'elysia';
import { sendManifest } from '../handlers';

const router = new Elysia({ prefix: '/manifest' });

router.get('/', async ({ headers: { host } }) => sendManifest(host));

export default router;
