/**
 * URLフラグメントの配列に対応するURLパスの配列を取得
 * @param urlFragment urlパスを/で区切った配列 /blog/rust/base ⇒ ['rust', 'base']
 * @param basePath 根底となるurlパス
 * @returns ['/blog/rust', '/blog/rust/base']
 */
function getUrlPath(urlFragment: string[], basePath: string) {
  return urlFragment.map((path, index, arr) => {
    if (index === 0) {
      return `${basePath}/${arr[index]}`
    }

    let ret = basePath
    for (let pathLevel = 0; pathLevel <= index; pathLevel++) {
      ret += `/${arr[pathLevel]}`
    }
    return ret
  })
}

export const Url = {
  getUrlPath,
}
