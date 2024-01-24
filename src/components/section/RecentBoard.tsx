import React from 'react'
import FeaturedPostCard from '@components/common/FeaturedPostCard.tsx'
import { PostResponse } from '../../constants/interface'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

function RecentBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:flex sm:justify-center sm:px-32 sm:gap-8 sm:my-4',
    base: '',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <div className="w-full h-fit flex justify-center items-center gap-16">
        <div className="w-1/2 flex-wrap">
          <FeaturedPostCard response={PostResponse} className="border-t pt-6" />
        </div>
        <div className="w-1/2 flex-wrap">
          <FeaturedPostCard response={PostResponse} className="border-t pt-6" />
        </div>
      </div>
    </section>
  )
}
export default RecentBoard
