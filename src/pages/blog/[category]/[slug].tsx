import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Inter } from 'next/font/google'
import { remark } from 'remark'
import html from 'remark-html'
import { BasicContent } from '@/components/content/BasicContent'
import { BasicLayout } from '@/layouts/BasicLayout'
import { File } from '@/utils/File'

const inter = Inter({ subsets: ['latin'] })

type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: as不要にする.
  const fileFullPaths = File.getPostsFileFullPath() as string[]

  const paths = fileFullPaths.map((fileFullPath) => {
    const fileContents = fs.readFileSync(fileFullPath, 'utf-8')
    const matterResult = matter(fileContents)

    const filename = fileFullPath.split('/').reverse()[0]
    return {
      params: {
        category: matterResult.data.category,
        slug: filename.replace(/\.md/, ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  // TODO: as不要にする.
  const fullPath = File.getPostsFileFullPath(`${params!.slug}.md`) as string
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const content = processedContent.toString()

  return {
    props: {
      content,
      data: matterResult.data,
    },
  }
}

const Article = ({ content, data }: ArticleProps) => {
  return (
    <>
      <BasicLayout header={{ title: 'test' }}>
        <BasicContent>
          <div>
            <h1>{data.category}</h1>
            <h2>{data.title}</h2>
            <p>{data.postsDate}</p>
            <p>{data.updateDate}</p>
            <p>{data.description}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </BasicContent>
      </BasicLayout>
    </>
  )
}

export default Article
