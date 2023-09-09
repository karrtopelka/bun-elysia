import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import html from '@elysiajs/html';

import api from './api';

const app = new Elysia()
  .use(swagger())
  .use(html())
  .get('/', () => 'Hello Elysia')
  .use(api);

export default app;
