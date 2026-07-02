'use server';

import { verifyLoginSession } from '@/lib/login/manage-login';
import { postRepository } from '@/repositories/post';

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: 'Faça login em outra aba antes de salvar.',
    };
  }

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: 'Erro desconhecido',
    };
  }

  // // @ts-expect-error -- single-arg form deprecated in next 16
  // revalidateTag('posts');
  // // @ts-expect-error -- single-arg form deprecated in next 16
  // revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
