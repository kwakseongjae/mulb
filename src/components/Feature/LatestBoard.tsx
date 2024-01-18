import React from 'react'
import Default, { PostCardData } from '../../constants/interface.tsx'
import { TextPostCard } from '@components/common/PostCards.tsx'

function LatestBoard({ className }: Default): React.JSX.Element {
  return (
    <section className={`${className}`}>
      <h1 className="text-base font-bold border-t-2 border-b mb-8 pt-4 pb-2">
        최근 포스트
      </h1>
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
