import React from 'react'
import Default from '@utils/interface.ts'
import { Post } from '../../constants/interface.tsx'
import CategoryButton from '@components/common/CategoryButton.tsx'
import dateFormer from '@utils/date_former.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

interface TextPostCard extends Default {
  response: Post
}
function TextPostCard({ response, className }: TextPostCard): React.JSX.Element {
  if (!response)
    return (
      <div className="w-auto h-80 md:h-70 md:m-4">
        <div className="_bg-skeleton w-auto h-full md:m-6 md:rounded" />
      </div>
    )
  const { data, status, message } = response
  const clickHandler = (): void => {
    window.location.href = '#'
  }
  const style: TailwindProperties = {
    sm: 'sm:border sm:bg-neutral-100 sm:p-6 sm:rounded sm:bg-neutral-50 sm:cursor-pointer _hover-float-up',
    base: 'border-b border-neutral-200 py-4 px-6 bg-white',
  }
  return (
    <div
      onClick={clickHandler}
      className={`${style.sm} ${style.base} ${className}`}>
      <div className="flex justify-between items-center">
        <CategoryButton
          className="text-xs font-bold"
          categoryId={data.categoryId}
        />
        <span className="text-xs font-normal mt-1 text-gray-600">
          {dateFormer(data.createdDate.slice(0, 10))}
        </span>
      </div>
      <h1 className="text-sm font-bold tracking-tight text-gray-800 line-clamp-1 mt-4">
        {data.title}
      </h1>
      <p className="text-xs font-normal text-neutral-500 line-clamp-6 mt-2">
        {data.content}
      </p>
      <a href="#" className="flex items-center gap-2 pt-2">
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
export default TextPostCard
