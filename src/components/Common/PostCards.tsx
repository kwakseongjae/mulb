import React from 'react'
import Default, { PostCard } from '../../constants/interface'
import CategoryButton from '@components/common/CategoryButton'
import dateFormer from '@utils/date_former.ts'

interface Interface extends Default {
  response: PostCard
}

const layout: object = {
  xl: 'xl:grid',
  lg: 'lg:grid',
  md: 'md:grid',
  xs: '',
  sm: '',
}

/*Default PostCard*/
export function DefaultPostCard({
  response,
  className,
}: Interface): React.JSX.Element {
  const { data, status, message } = response
  return (
    <div className={`w-full h-fit flex ${className}`}>
      <a href="#">
        <img
          alt="thumbnail"
          className="w-36 h-36 rounded object-cover mr-4"
          src={data.thumbnailUrl}
        />
      </a>
      <div className="grid pt-2 pb-4">
        <div className="flex items-center justify-between">
          <CategoryButton
            className="text-xs font-bold"
            categoryId={data.categoryId}
          />
          <span className="text-xs font-bold text-gray-600">
            {dateFormer(data.createdDate.slice(0, 10))}
          </span>
        </div>
        <a
          href="#"
          className="text-base font-extrabold text-neutral-900 line-clamp-1 mt-2">
          {data.title}
        </a>
        <p className="text-xs font-normal text-neutral-500 line-clamp-4">
          {data.content}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <img
            alt="profile"
            src={data.author.imageUrl}
            className="w-6 h-6 rounded-full"
          />
          <a href="#" className="text-xs font-bold text-neutral-500 mt-1">
            {data.author.nickName}
          </a>
        </div>
      </div>
    </div>
  )
}

/*Featured PostCard*/
export function FeaturedPostCard({ response, className }: Interface) {
  const { data, status, message } = response
  return (
    <div className={`grid ${layout.xl} ${layout.lg} ${layout.md} ${className}`}>
      <a href="#">
        <img
          alt="thumbnail"
          className="w-full h-80 rounded"
          src={data.thumbnailUrl}
        />
      </a>
      <div className="flex justify-between items-center mt-6">
        <CategoryButton
          className="text-xs font-bold"
          categoryId={data.categoryId}
        />
        <span className="text-xs font-bold text-gray-600">
          {dateFormer(data.createdDate.slice(0, 10))}
        </span>
      </div>
      <a
        href="#"
        className="text-3xl font-extrabold text-neutral-900 line-clamp-2 mt-4">
        {data.title}
      </a>
      <p className="text-sm font-normal text-neutral-500 line-clamp-2 mt-2">
        {data.content}
      </p>
      <div className="flex items-center gap-2 pt-2">
        <img
          alt="profile"
          src={data.author.imageUrl}
          className="w-8 h-8 rounded-full"
        />
        <a href="#" className="text-sm font-bold text-neutral-500 mt-1">
          {data.author.nickName}
        </a>
      </div>
    </div>
  )
}
