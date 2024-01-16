import React from 'react'
import Default, { PostCard } from '../../constants/interface.tsx'

interface Interface extends Default {
  response: PostCard
}

function DefaultPostCard({ response, className }: Interface): React.JSX.Element {
  const { data, status, message } = response
  return (
    <div className={`w-full h-fit flex items-center border-b pb-8 ${className}`}>
      <img
        alt="thumbnail"
        className="w-40 h-40 rounded object-cover mr-4"
        src={data.thumbnailUrl}
      />
      <div>
        <div className="flex justify-between items-center">
          <span className="text-xs">{data.createdDate.slice(0, 10)}</span>
          <span className="text-xs">{data.categoryId}</span>
        </div>
        <a className="text-xl">{data.title}</a>
        <p className="text-base">{data.content}</p>
      </div>
    </div>
  )
}
export default DefaultPostCard

const style: object = {
  xl: 'xl:grid',
  lg: 'lg:grid',
  md: 'md:grid',
  xs: '',
  sm: '',
}
export function FeaturedPostCard({ response, className }: Interface) {
  const { data, status, message } = response
  return (
    <div className={`grid ${style.xl} ${style.lg} ${style.md} ${className}`}>
      <img alt="thumbnail" className="w-full rounded" src={data.thumbnailUrl} />
      <div className="flex justify-between items-center">
        <a className="text-xs">{data.categoryId}</a>
        <span className="text-xs">{data.createdDate}</span>
      </div>
      <a className="text-2xl">{data.title}</a>
      <p>{data.content}</p>
    </div>
  )
}
