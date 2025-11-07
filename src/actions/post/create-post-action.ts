'use server';

import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { PostCreateSchema } from '@/lib/post/queries/validations';
import { PostModel } from '@/models/post/post-model';
import { getZodErrorMessages } from '@/utils/get-zod-error-message';
import z from 'zod';

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedToObj = PostCreateSchema.safeParse(formDataToObj);

  if (!zodParsedToObj.success) {
    const errors = getZodErrorMessages(zodParsedToObj.error.issues);
    return {
      errors,
      formState: makePartialPublicPost(formDataToObj),
    };
  }

  const validPostData = zodParsedToObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: Date.now().toString(),
    slug: Math.random().toString(36),
  };

  return {
    formState: newPost,
    errors: [],
  };
}
