import { z } from 'zod';

export function getZodErrorMessages(
  tree: z.core.$ZodErrorTree<Record<string, unknown>>,
): string[] {
  return [
    ...tree.errors,
    ...Object.values(tree.properties ?? {})
      .map(field => field?.errors || [])
      .flat(),
  ].filter(Boolean);
}
