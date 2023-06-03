import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

/**
 * postsディレクトリ配下のmdを再帰的に取得する
 * @param slug 動的なURLパス
 * @returns
 */
async function getContent(slug: string[]) {
  if (!slug) {
    const empty = {
      content: '',
      data: {
        category: '',
        title: '',
        postsDate: '',
        updateDate: '',
        description: '',
      },
    }
    return empty
  }
  const POSTS_DIR = __dirname.replace('.next/server', 'src') + '/posts'
  const postPath = slug.join('/')
  const fullPath = path.join(POSTS_DIR, `${postPath}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const content = processedContent.toString()

  return { content, data: matterResult.data }
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
