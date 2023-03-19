import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <Link href="/blog/blog">blog</Link>
    <Link href="/tech/basic">tech</Link>
    <Link href="/test/template">test</Link>
  </>
}
