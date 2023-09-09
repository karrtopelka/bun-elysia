import { Elysia } from 'elysia';
import { getAllConversations, getConversation } from '../handlers';

const router = new Elysia({ prefix: '/channels' });

router.get('/:providerChannelId/conversations', async () => getAllConversations());

router.get(
  '/:providerChannelId/conversations/:sourceConversationId',
  async ({ params: { sourceConversationId } }) => getConversation(sourceConversationId),
);

export default router;
