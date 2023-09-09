import { Context, t } from 'elysia';
import { authorizeApp } from '../functions';
import { htmlReturn, htmlStyles, prisma } from '../utils';
import { User } from '@prisma/client';

export const AuthorizeQuery = t.Object({
  code: t.String(),
});

export const authorize = async (code: string) => {
  try {
    const response = await authorizeApp({ code });

    if (response.status !== 200) {
      throw new Error('Error ocured during authorization');
    }

    const user = await prisma.user.create(response.data);

    return user;
  } catch (error) {
    throw new Error('Error ocured during authorization');
  }
};

export const deleteAuthorize = async () => {
  await prisma.user.deleteMany();
};
