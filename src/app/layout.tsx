import { Metadata } from 'next'
import { ReactNode } from 'react'
import { BasicContent } from '@/components/content/BasicContent'
import { sentence } from '@/constant/sentence'
import { BasicLayout } from '@/layouts/basic/BasicLayout'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'hayashi blog',
  description: 'engineer blog',
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <html lang='ja'>
        <body>
          <BasicLayout header={{ title: sentence.phrase.blog.title }}>
            <BasicContent>{props.children}</BasicContent>
          </BasicLayout>
        </body>
      </html>
    </>
  )
}
