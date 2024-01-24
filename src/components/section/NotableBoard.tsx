import React from 'react'
import Default, { PostResponse } from '../../constants/interface'
import TailwindProperties from '@utils/tailwindProperties.ts'
import FeaturedPostCard from '@components/common/FeaturedPostCard.tsx'
import { DefaultPostCard } from '@components/common/DefaultPostCard.tsx'

function NotableBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:flex sm:justify-center sm:items-start sm:gap-8 sm:px-32 sm:pt-6 sm:mb-8',
    base: 'grid py-4',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <div title="1,1" className="flex-wrap w-full pb-8 sm:w-3/5">
        <FeaturedPostCard response={PostResponse} />
      </div>
      <div title="1,4" className="w-full flex-wrap grid sm:w-2/5 sm:gap-4">
        <DefaultPostCard response={PostResponse} />
        <DefaultPostCard response={PostResponse} />
        <DefaultPostCard response={PostResponse} />
      </div>
    </section>
  )
}

export default NotableBoard
