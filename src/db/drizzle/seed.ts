import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schema';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // ISSO LIMPA A BASE DE DADOS
    await drizzleDb.insert(postsTable).values(posts);

    console.error();
    console.error(`${posts.length} posts foram salvos na base de dados!`);
    console.error();
  } catch (e) {
    console.error();
    console.error('Ocorreu um erro...');
    console.error(e);
    console.error();
    console.error();
  }

  console.log(posts);
})();
