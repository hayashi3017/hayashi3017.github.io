import { Metadata } from 'next'
import { ReactNode } from 'react'
import { BasicContent } from '@/components/content/BasicContent'
import { BasicLayout } from '@/layouts/basic/BasicLayout'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'hayashi blog',
  description: 'engineer blog',
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body>
          <BasicLayout header={{ title: 'ようこそ' }}>
            <BasicContent>{props.children}</BasicContent>
          </BasicLayout>
        </body>
      </html>
    </>
  )
}
