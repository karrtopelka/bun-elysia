import app from './app';
import { checkEnv } from './utils';

app.listen(3000);

const startup = () => {
  checkEnv();

  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
};

startup();
