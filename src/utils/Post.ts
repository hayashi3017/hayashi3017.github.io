import toc from '@jsdevtools/rehype-toc'
import matter from 'gray-matter'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import { PostData } from '@/components/post/PostContent'

function returnEmpty() {
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

/**
 * posts配下のファイルパスを取得する
 * @param fullPath postsを含む絶対パス
 * @returns posts配下のファイルパス(拡張子あり）
 */
function getPath(fullPath: string) {
  return fullPath.split('posts/').reverse()[0]
}

/**
 * mdファイルをHTML構文文字列に変換し、メタ情報と内容と目次(TOC)を返す
 * @param file mdファイルの絶対パス
 * @returns TOCのHTML
 */
async function getContentWithTOC(file: string) {
  if (!file) {
    returnEmpty()
  }
  const matterResult = matter(file)
  const processedContent = await remark()
    // mdastをhastへ変換
    .use(remarkRehype)
    // codeタグにクラス名を付与する https://github.com/rehypejs/rehype-highlight
    .use(rehypeHighlight)
    // hタグにidを付与する　https://github.com/rehypejs/rehype-slug
    .use(rehypeSlug)
    // hタグにaタグを付与する https://github.com/rehypejs/rehype-autolink-headings
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    // hタグから目次を生成する https://github.com/JS-DevTools/rehype-toc
    .use(toc, {
      position: 'beforeend', // クラス名を利用した文字列の分割を行うために、後ろに生成する
    })
    .use(rehypeStringify)
    .process(matterResult.content)

  const entireContent = processedContent.toString()
  const content = splitTOC(entireContent)

  // asによる型キャストなしにできる？
  return { content: content.main, data: matterResult.data as PostData, toc: content.toc }
}

/**
 * TOCと本文とを分離する
 * @param content 
 * @returns 
 */
function splitTOC(content: string) {
  // rehype-tocのデフォルトクラス名に依存しているので注意
  const delimiter = '<nav class="toc">'
  const fragments = content.split(delimiter)
  return { main: fragments[0], toc: delimiter + fragments[1] }
}

export const Post = {
  getPath,
  getContentWithTOC,
  splitTOC,
}
