import CardLink from '@/components/link/card/CardLink'
import BreadcrumbsNav from '@/components/navigator/Breadcrumbs'
import PostView from '@/components/post/PostView'
import PaddingLayout from '@/layouts/padding/PaddingLayout'
import { RootRoute } from '@/routes/RootRoute'
import { Post } from '@/utils/Post'

export default async function Page() {
  return (
    <>
      <PaddingLayout>
        <CardLink title={RootRoute.root.name} url={RootRoute.root.path}>
          ホームページです。技術ブログや日常系やあれこれ・・アウトプットの場として活用します。
        </CardLink>
      </PaddingLayout>
      <PaddingLayout>
        <CardLink title={RootRoute.blog.root.name} url={RootRoute.blog.root.path}>
          技術ブログです。エンジニアとして、技術的なことをまとめていきたいです。
        </CardLink>
        <PaddingLayout>
          <CardLink title={RootRoute.blog.rust.name} url={RootRoute.blog.rust.path}>
            Rustに関する技術記事です。
          </CardLink>
        </PaddingLayout>
        <PaddingLayout>
          <CardLink title={RootRoute.blog.typescript.name} url={RootRoute.blog.typescript.path}>
            Typescriptに関する技術記事です。
          </CardLink>
        </PaddingLayout>
      </PaddingLayout>
    </>
  )
}
