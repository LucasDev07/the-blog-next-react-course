'use server';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Eu estou em uma server action', path);
}
