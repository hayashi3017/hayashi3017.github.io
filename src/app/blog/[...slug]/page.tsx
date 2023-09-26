import PostView from '@/components/post/PostView'
import { File } from '@/utils/File'
import { Post } from '@/utils/Post'

export default async function Page(props: { params: { slug: string[] } }) {
  const file = await File.readContent(props.params.slug)
  const { content, data, toc } = await Post.getContentWithTOC(file)
  return (
    <>
      <PostView sub={{ toc }} main={{ data, content }} slug={props.params.slug} />
    </>
  )
}
