import React from 'react'
import Default, { PostCard } from '../../constants/interface'
import CategoryButton from '@components/common/CategoryButton'
import dateFormer from '@utils/date_former.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

interface Interface extends Default {
  response: PostCard
}

/*Default PostCard*/
export function DefaultPostCard({
  response,
  className,
}: Interface): React.JSX.Element {
  const { data, status, message } = response
  const style: TailwindProperties = {
    sm: 'sm:block sm:pb-2 sm:px-0 sm:border-b sm:border-neutral-100 sm:bg-transparent',
    base: 'block px-6 py-2 border-b border-neutral-200 bg-neutral-100',
  }
  return (
    <div className={`${style.sm} ${style.base} ${className}`}>
      <div className="flex items-center justify-between">
        <CategoryButton
          className="text-xs font-bold"
          categoryId={data.categoryId}
        />
        <span className="text-xs font-normal mt-1 text-neutral-400">
          {dateFormer(data.createdDate.slice(0, 10))}
        </span>
      </div>
      <a
        href="#"
        className="text-base font-extrabold text-gray-700 line-clamp-1 mt-4  sm:mt-2">
        {data.title}
      </a>
      <p className="text-xs font-normal text-neutral-500 line-clamp-4">
        {data.content}
      </p>
      <a className="flex items-center gap-2 pt-2 cursor-pointer">
        <img
          alt="profile"
          src={data.author.imageUrl}
          className="w-6 h-6 rounded-full border border-neutral-200"
        />
        <h1 className="text-xs font-bold text-neutral-500 mt-1">
          {data.author.nickName}
        </h1>
      </a>
    </div>
  )
}
