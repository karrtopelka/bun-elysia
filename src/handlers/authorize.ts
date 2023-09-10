import { authorizeApp } from '../functions';
import { prisma } from '../utils';

export const authorize = async (code: string) => {
  try {
    const response = await authorizeApp({ code });
    console.log('🚀 ~ file: authorize.ts:7 ~ authorize ~ response:', response.data);

    if (response.status !== 200) {
      throw new Error('Error ocured during authorization');
    }

    const user = await prisma.user.create({ data: response.data });
    console.log('🚀 ~ file: authorize.ts:14 ~ authorize ~ user:', user);

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAuthorize = async () => {
  await prisma.user.deleteMany();
};
