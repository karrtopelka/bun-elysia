import { getDomain } from './getDomain';

export const generateManifest = (hostname?: string, port?: number) => {
  const domain = getDomain(hostname, port);

  return {
    version: 'v202101',
    endpoints: {
      getConversations: `${domain}/api/channels/:providerChannelId/conversations`,
      getConversationById: `${domain}/channels/:providerChannelId/conversations/:sourceConversationId`,
      postMessage: `${domain}/channels/:providerChannelId/messages`,
      getSenderById: `${domain}/channels/:providerChannelId/senders/:senderId`,
    },
  };
};
