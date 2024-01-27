import React from 'react'
import FeaturedPostCard from '@components/common/FeaturedPostCard.tsx'
import { PostResponse } from '../../constants/interface'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

function WeekBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:w-auto sm:mx-28 sm:my-4',
    base: 'w-full',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <h1 className="text-xl font-bold">최신 소식</h1>
      <div className="w-full sm:flex sm:justify-center sm:items-start sm:gap-4 grid">
        <div className="sm:w-1/2 sm:flex-wrap w-full">
          <FeaturedPostCard response={PostResponse} className="border-t pt-6" />
        </div>
        <div className="sm:w-1/2 sm:flex-wrap w-full">
          <FeaturedPostCard response={PostResponse} className="border-t pt-6" />
        </div>
      </div>
    </section>
  )
}
export default WeekBoard
