import axios from 'axios';
import { prisma } from '../utils';

export const createChannel = async (accessToken: string) => {
  try {
    const sendData = {
      name: Bun.env.PD__CHANNEL_NAME,
      provider_channel_id: Bun.env.PD__CHANNEL_ID,
      provider_type: Bun.env.PD__CHANNEL_TYPE,
    };

    const sendUrl = `${Bun.env.PD__API_URL}/channels`;

    const response = await axios.post(sendUrl, sendData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.data['success']) {
      throw new Error('Error ocured during channel creation');
    }

    await prisma.channel.create({ data: response.data });
  } catch (error) {
    console.log(error);
  }
};
