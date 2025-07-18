import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-04-20'
        >
          20/04/2025 10:00
        </time>

        <PostHeading as='h1' url={postLink}>
          Aliquid hic saepe incidunt modi labo
        </PostHeading>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sed
          pariatur voluptatem ab, voluptas temporibus, asperiores a
          consequuntur, nesciunt reprehenderit delectus ea! Eligendi repudiandae
          optio, incidunt rem totam voluptas perspiciatis corporis
        </p>
      </div>
    </section>
  );
}
