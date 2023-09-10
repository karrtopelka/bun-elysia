import { prisma, prismaExclude } from '../../utils';

export const getAllConversations = async () => {
  const conversations = await prisma.conversation.findMany({
    select: {
      id: true,
      link: true,
      status: true,
      seen: true,
      next_messages_cursor: true,
      messages: {
        select: prismaExclude('Message', ['message_id']),
      },
      participants: {
        select: prismaExclude('Participant', ['participant_id']),
      },
    },
  });
  console.log(
    '🚀 ~ file: getAllConversations.ts:19 ~ getAllConversations ~ conversations:',
    conversations,
  );

  const response_data = {
    success: true,
    data: conversations,
    additional_data: {
      after: 'c-next',
    },
  };

  return response_data;
};
