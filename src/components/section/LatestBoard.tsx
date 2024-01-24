import React from 'react'
import { PostResponse } from '../../constants/interface.tsx'
import TextPostCard from '@components/common/TextPostCard.tsx'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

function LatestBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:flex sm:justify-center sm:px-32 sm:gap-8 sm:my-4',
    base: '',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <div className="w-full flex items-center justify-center gap-8">
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostResponse} />
        </div>
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostResponse} />
        </div>
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostResponse} />
        </div>
        <div className="w-1/4 flex-wrap">
          <TextPostCard response={PostResponse} />
        </div>
      </div>
    </section>
  )
}

export default LatestBoard
