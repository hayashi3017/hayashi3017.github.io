import { Post } from '@/utils/Post'

export default async function Page(props: { params: { slug: string[] } }) {
  const { content, data } = await Post.getContent(props.params.slug)
  return (
    <>
      <div>
        <h1>{data.category}</h1>
        <h2>{data.title}</h2>
        <p>{data.postsDate}</p>
        <p>{data.updateDate}</p>
        <p>{data.description}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  )
}
