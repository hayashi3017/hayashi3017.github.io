import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { post, postData } from '@/components/post/PostView'

/**
 * postsディレクトリ配下のmdを再帰的に取得する
 * @param slug 動的なURLパス
 * @returns
 */
async function getContent(slug: string[]): Promise<post> {
  if (!slug) {
    const empty = {
      content: '',
      data: {
        title: '',
        description: '',
        category: '',
        tags: [],
        postsDate: '',
        updateDate: '',
      },
    }
    return empty
  }
  const postPath = slug.join('/')
  const fullPath = path.join(process.env.POSTS_DIR as string, `${postPath}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const content = processedContent.toString()

  // asによる型キャストなしにできる？
  return { content, data: matterResult.data as postData }
}

/**
 * posts配下のファイルパスを取得する
 * @param fullPath postsを含む絶対パス
 * @returns posts配下のファイルパス(拡張子あり）
 */
function getPath(fullPath: string) {
  return fullPath.split('posts/').reverse()[0]
}
export const Post = {
  getContent,
  getPath,
}
