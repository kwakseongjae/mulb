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
export default function Post({
  data,
  width,
  height,
}: {
  data: { profile: ProfileProps; post: PostProps; imageUrl?: string }
  width: string
  height: string
}) {
  const { title, content, views, likes, comments, profile, tags, imageUrl } =
    data
  //전달받은 변수를 통해 포스트 스타일의 정적인 요소를 정의합니다.
  const postStyle = {
    width: width,
    height: height,
  }
  return (
    <div
      className={'block relative _border-b-color0 bg-white'}
      style={postStyle}
    >
      <div title={'top'} className={'pl-8 pr-8 pt-8'}>
        <Profile data={profile} />
        <h1 className={'_text-25 line-clamp-2'}>{title}</h1>
        <p className={'_text-14 _text-color1 mb-4 line-clamp-2'}>{content}</p>
      </div>
      <div className={'absolute m-4'}>
        <Tags
          data={tags}
          width={'75%'}
          maxColum={2}
          colorScheme={'bg-neutral-300'}
          theme={'roundend-2xl pt-1 px-2'}
        />
      </div>
      {/*후에 Image로 교체합니다*/}
      <>
        {imageUrl ? (
          <Skeleton width={'100%'} height={'18rem'} image={true} desc={false} />
        ) : (
          <div className={'w-full h-28 -mx-4'} />
        )}
      </>
      <h2 className={'py-4'}>
        {['조횟수', views, '좋아요', likes, '댓글', comments].join(' ').trim()}
      </h2>
    </div>
  )
}
