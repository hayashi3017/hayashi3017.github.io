import BreadcrumbsNav from '@/components/navigator/Breadcrumbs'
import PostView from '@/components/post/PostView'
import { Post } from '@/utils/Post'

export default async function Page(props: { params: { slug: string[] } }) {
  const { content, data } = await Post.getContent(props.params.slug)
  console.log(props.params.slug)
  return (
    <>
      <BreadcrumbsNav fragPath={props.params.slug} />
      <PostView data={data} content={content} />
    </>
  )
}
