import BreadcrumbsNav from '@/components/navigator/Breadcrumbs'
import PostTOC from '@/components/post/PostTOC'
import PostView from '@/components/post/PostView'
import { File } from '@/utils/File'
import { Post } from '@/utils/Post'

export default async function Page(props: { params: { slug: string[] } }) {
  const file = await File.readContent(props.params.slug)
  // const { content, data } = await Post.getContent(file)
  const { content, data, toc } = await Post.getContentWithTOC(file)
  return (
    <>
      <BreadcrumbsNav fragPath={props.params.slug} />
      <PostView data={data} content={content} />
      <PostTOC toc={toc} />
    </>
  )
}
