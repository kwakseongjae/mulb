import React from 'react'
import Default, { PostCardData } from '../../constants/interface.tsx'
import { TextPostCard } from '@components/common/PostCards.tsx'

function LatestBoard({ className }: Default): React.JSX.Element {
  return (
    <section className={`border-t pt-4 ${className}`}>
      <div className="w-full flex items-center justify-center gap-8">
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostCardData} />
        </div>
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostCardData} />
        </div>
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostCardData} />
        </div>
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostCardData} />
        </div>
      </div>
    </section>
  )
}

export default LatestBoard
