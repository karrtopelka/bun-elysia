import { prisma, prismaExclude } from '../../utils';

export const getConversation = async (sourceConversationId: string) => {
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: sourceConversationId,
    },
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

  const response_data = {
    success: true,
    data: conversation ?? {},
    additional_data: {
      after: 'c-next',
    },
  };

  return response_data;
};
