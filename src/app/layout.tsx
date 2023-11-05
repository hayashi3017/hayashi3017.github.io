import { Metadata } from 'next'
import { ReactNode } from 'react'
import { BasicContent } from '@/components/content/BasicContent'
import { Split2Layout } from '@/layouts/basic/Split2Layout'
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
          <Split2Layout header={{ title: '雑多思考log' }}>
            <BasicContent>{props.children}</BasicContent>
          </Split2Layout>
        </body>
      </html>
    </>
  )
}
