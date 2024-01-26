import React from 'react'
import Default, { PostResponse } from '../../constants/interface'
import TailwindProperties from '@utils/tailwindProperties.ts'
import FeaturedPostCard from '@components/common/FeaturedPostCard.tsx'
import { DefaultPostCard } from '@components/common/DefaultPostCard.tsx'

function NotableBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:w-auto sm:mx-32 sm:px-8 sm:flex sm:justify-center sm:items-start',
    base: 'w-full grid',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <div title="1,1" className="w-full flex-wrap  sm:w-3/5">
        <FeaturedPostCard response={PostResponse} />
      </div>
      <div title="1,4" className="w-full flex-wrap grid gap-0  sm:w-2/5">
        <DefaultPostCard response={PostResponse} />
        <DefaultPostCard response={PostResponse} />
        <DefaultPostCard response={PostResponse} />
      </div>
    </section>
  )
}

export default NotableBoard
