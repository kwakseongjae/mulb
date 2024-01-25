import React from 'react'
import { Post } from '../../constants/interface.tsx'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'
import CategoryButton from '@components/common/CategoryButton.tsx'
import dateFormer from '@utils/date_former.ts'

interface FeaturedPostCard extends Default {
  response: Post
}
function FeaturedPostCard({ response, className }: FeaturedPostCard) {
  const { data, status, message } = response
  const style: TailwindProperties = {
    sm: 'sm:block sm:bg-transparent sm:border-none',
    base: 'block bg-white border-b border-neutral-150',
  }
  return (
    <div className={`${style.sm} ${style.base} ${className}`}>
      <a title="image" href="#">
        <img
          alt="thumbnail"
          className="w-full h-40 sm:w-full sm:h-80"
          src={data.thumbnailUrl}
        />
      </a>
      <div className="px-6 pb-2 border-b border-neutral-100  sm:px-0">
        <div title="text" className="flex justify-between items-center mt-4">
          <CategoryButton
            className="text-xs font-bold"
            categoryId={data.categoryId}
          />
          <span className="text-xs font-normal text-neutral-400">
            {dateFormer(data.createdDate.slice(0, 10))}
          </span>
        </div>
        <a
          href="#"
          className="text-base font-extrabold text-gray-800 line-clamp-2  mt-3 sm:text-2xl sm:line-clamp-2">
          {data.title}
        </a>
        <p className="text-xs font-normal text-neutral-500 line-clamp-4 mt-0 sm:mt-2 sm:text-sm sm:line-clamp-4">
          {data.content}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <img
            alt="profile"
            src={data.author.imageUrl}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
          />
          <a
            href="#"
            className="text-xs sm:text-sm font-bold text-neutral-500 mt-1">
            {data.author.nickName}
          </a>
        </div>
      </div>
    </div>
  )
}
export default FeaturedPostCard
