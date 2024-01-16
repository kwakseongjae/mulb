import React from 'react'
import DefaultPostCard, { FeaturedPostCard } from '@components/common/PostCards'
import Default, { PostCardData } from '../../constants/interface'

const layout: object = {
  xl: 'xl:flex xl:justify-center xl:items-start xl:gap-12 border-b',
  lg: 'lg:flex lg:justify-center lg:items-center',
  md: 'md:flex md:justify-center md:items-center',
  sm: 'sm:flex sm:justify-center sm:items-center',
}

function PostCardBoard({ className }: Default): React.JSX.Element {
  return (
    <div
      className={`w-full bg-white ${layout.xl} ${layout.lg} ${layout.md} ${layout.sm} ${className}`}>
      <div title="1,1" className="w-3/5 flex-wrap">
        <FeaturedPostCard response={PostCardData} />
      </div>
      <div title="1,4" className="w-2/5 flex-wrap grid gap-4">
        <DefaultPostCard response={PostCardData} />
        <DefaultPostCard response={PostCardData} />
        <DefaultPostCard response={PostCardData} />
      </div>
    </div>
  )
}

export default PostCardBoard
