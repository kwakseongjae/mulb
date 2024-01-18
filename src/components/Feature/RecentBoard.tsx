import React from 'react'
import Default from '../../constants/interface'
import { FeaturedPostCard } from '@components/common/PostCards.tsx'
import { PostCardData } from '../../constants/interface'

function RecentBoard({ className }: Default): React.JSX.Element {
  return (
    <section title="latest-board" className={`${className}`}>
      <div className="w-full h-fit flex justify-center items-center gap-16">
        <div className="w-1/2 flex-wrap">
          <FeaturedPostCard response={PostCardData} className="border-t pt-6" />
        </div>
        <div className="w-1/2 flex-wrap">
          <FeaturedPostCard response={PostCardData} className="border-t pt-6" />
        </div>
      </div>
    </section>
  )
}
export default RecentBoard
