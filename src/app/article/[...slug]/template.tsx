import Boundary from '@/components/boundary/boundary'

export default function Template(props: { children: React.ReactNode }) {
  return (
    <>
      <Boundary>{props.children}</Boundary>
    </>
  )
}
