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
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '30rem',
  }
  return (
    <div
      className="block relative px-8 pt-8 pb-4 bg-white rounded-2xl border"
      style={postStyle}>
      <div title="top" className="pt-8'">
        <MinProfile data={author ? author : default_data.author} width="100%" />
        <h1 className="_heading-8 _text-color-bold line-clamp-1 mt-6 mb-4">
          {title ? title : default_data.title}
        </h1>
        <p className="_paragraph-5 _text-color-bold mb-8 line-clamp-2">
          {content ? content : default_data.content}
        </p>
      </div>
      <div className="relative">
        {thumbnailUrl ? (
          <img
            alt="thumnailUrl"
            className="object-cover object-center _thumbnail-darker rounded-2xl"
            style={imageStyle}
            src={thumbnailUrl ? thumbnailUrl : default_data.thumbnailUrl}
          />
        ) : (
          <></>
        )}
        <div
          className={['mt-4 ml-4 top-0', thumbnailUrl ? 'absolute' : 'mb-12']
            .join(' ')
            .trim()}>
          <Tags
            data={tags ? tags : default_data.tags}
            width="50%"
            maxColum={2}
            colorScheme="bg-black text-white"
          />
        </div>
      </div>
      <div className="flex relative">
        <h2 className="pt-4 _text-1 _text-color1">
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
      </div>
    </div>
  )
}
