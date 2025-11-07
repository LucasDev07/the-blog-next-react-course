import { z } from 'zod';

export function getZodErrorMessages(issues: z.core.$ZodIssue[]): string[] {
  if (!issues || !issues.length) {
    return [];
  }
  return issues.map(issue => issue.message);
}
