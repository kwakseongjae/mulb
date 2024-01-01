import EmbedProfile from '@components/Common/EmbedProfile.tsx'
import Tags from '@components/Common/Tags.tsx'
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

export default function PostCard({
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
    padding: '2rem 2rem 2rem 2rem',
    borderRadius: '2rem',
  }
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '30rem',
  }
  return (
    <div
      className="block relative _border-color-0 _post-hover"
      style={postStyle}>
      <div title="top" className="pt-8'">
        <EmbedProfile
          data={author ? author : default_data.author}
          width="100%"
        />
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
            className="object-cover object-center _thumbnail-darker rounded-2xl _border-color-0 mb-8"
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
            colorScheme="bg-neutral-100 _text-color-normal"
          />
        </div>
      </div>
      <div className="flex relative">
        <h2 className="_text-1 _text-color1">
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
