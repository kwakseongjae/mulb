import Profile from '@components/Profile.tsx'
import Skeleton from '@components/Skeleton.tsx'
import Tags from '@components/Tags.tsx'
interface PostProps {
  title: string
  content: string
  views: number
  likes: number
  comments: number
  tags: Array<string>
}
//Post에 관한 정의입니다.
export default function PostWithImage({
  data,
  width,
  height,
}: {
  data: { profile: ProfileProps; post: PostProps }
  width: string
  height: string
}) {
  const { title, content, views, likes, comments, profile, tags } = data
  //전달받은 변수를 통해 포스트 스타일의 정적인 요소를 정의합니다.
  const postStyle = {
    width: width,
    height: height,
  }
  return (
    <div className={'block relative'} style={postStyle}>
      <Profile data={profile} />
      <h1 className={'text-3xl'}>{title}</h1>
      <p>{content}</p>
      <div className={'absolute'}>
        <Tags
          data={tags}
          width={'75%'}
          maxColum={2}
          colorScheme={'bg-neutral-300'}
          theme={'roundend-2xl'}
        />
      </div>
      <Skeleton width={'100%'} height={'20rem'} image={false} desc={false} />
      <h2>
        {['조횟수', views, '좋아요', likes, '댓글', comments].join(' ').trim()}
      </h2>
    </div>
  )
}
