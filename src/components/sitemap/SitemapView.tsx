'use client'

import { usePathname } from 'next/navigation'
import CardLink from '../link/card/CardLink'
import { route } from '@/constant/route'
import PaddingLayout from '@/layouts/padding/PaddingLayout'

export function SitemapView() {
  const pathName = usePathname()
  // 現在のパス以降のパスを表示する
  // routeUtil.getAllRoutes()

  return (
    <>
      <PaddingLayout>
        <CardLink title={route.root.root.name} url={route.root.root.path}>
          {route.root.root.desc}
        </CardLink>
      </PaddingLayout>
      <PaddingLayout>
        <CardLink title={route.article.root.name} url={route.article.root.path}>
          {route.article.root.desc}
        </CardLink>
        <PaddingLayout>
          <CardLink title={route.article.rust.name} url={route.article.rust.path}>
            {route.article.rust.desc}
          </CardLink>
        </PaddingLayout>
        <PaddingLayout>
          <CardLink title={route.article.typescript.name} url={route.article.typescript.path}>
            {route.article.typescript.desc}
          </CardLink>
        </PaddingLayout>
      </PaddingLayout>
    </>
  )
}
