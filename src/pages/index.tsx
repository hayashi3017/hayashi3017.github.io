import { Inter } from 'next/font/google'
import Link from 'next/link'
import { BasicContent } from '@/components/content/BasicContent'
import { BasicLayout } from '@/layouts/BasicLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <BasicLayout header={{ title: 'ようこそ' }}>
        <BasicContent>
          <div>
            工事中です！ <span>&#x1f680;&#x1f680;&#x1f680;</span>
            <br />
            ゆっくりしていってね。
          </div>
        </BasicContent>
      </BasicLayout>
    </>
  )
}
