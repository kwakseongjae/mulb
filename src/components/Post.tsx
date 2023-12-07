import MinProfile from '@components/MinProfile.tsx'
import Tags from '@components/Tags.tsx'
import React from 'React'

const default_data = {
  title: 'title',
  content: 'content',
  thumbnailUrl: null,
  author: {
    createdData: 'xxxx-xx-xx',
    updatedData: 'xxxx-xx-xx',
    nickName: 'nickname',
    imageUrl: null,
  },
  views: 0,
  likes: 0,
  comments: 0,
  tags: ['tag0', 'tag1'],
}

interface PostProps {
  title: string
  content: string
  thumbnailUrl: string
  author: object
  /*아직 백엔드에 추가되지 않은 기능입니다.*/
  views?: number
  likes?: number
  comments?: number
  tags?: Array<string>
}

export default function Post({
  data,
  width,
}: {
  data: PostProps
  width: string
}) {
  const { title, content, thumbnailUrl, author, likes, comments, tags, views } =
    data
  const postStyle: React.CSSProperties = {
    width: width,
    height: 'fit=content',
  }
  return (
    <div className="block relative _border-b-color0 pt-8" style={postStyle}>
      <div title="top" className="pl-8 pr-8 pt-8'">
        <MinProfile data={author ? author : default_data.author} width="100%" />
        <h1 className="_text-25 line-clamp-2 mt-4">
          {title ? title : default_data.title}
        </h1>
        <p className="_text-14 _text-color1 mb-4 line-clamp-2">
          {content ? content : default_data.content}
        </p>
      </div>
      <div className="relative">
        {thumbnailUrl ? (
          <img
            alt="thumnailUrl"
            className="w-full h-96 object-cover object-center _thumbnail-darker"
            src={thumbnailUrl ? thumbnailUrl : default_data.thumbnailUrl}
          />
        ) : (
          <></>
        )}
        <div
          className={['mt-4 ml-8 top-0', thumbnailUrl ? 'absolute' : '']
            .join(' ')
            .trim()}>
          <Tags
            data={tags ? tags : default_data.tags}
            width="50%"
            maxColum={2}
            colorScheme="_bg-color3 _text-color4"
            theme="rounded-2xl _p-tag _heading-1 _noto-san"
          />
        </div>
      </div>
      <div className="flex relative">
        <h2 className="pt-5 pb-4 pl-8 _text-1 _text-color1">
          {[
            '조횟수',
            views ? views : default_data.views,
            '좋아요',
            likes ? likes : default_data.views,
            '댓글',
            comments ? comments : default_data.comments,
          ]
            .join(' ')
            .trim()}
        </h2>
        <object
          className="w-8 h-8 absolute right-4 top-4"
          data="https://www.svgrepo.com/show/522470/bookmark.svg"
          type="image/svg+xml"
        />
      </div>
    </div>
  )
}
