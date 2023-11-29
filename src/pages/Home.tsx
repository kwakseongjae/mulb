import Tags from '@components/Tags.tsx'
import Profile from '@components/Profile.tsx'
import Post from '@components/Post.tsx'
import Skeleton from '@components/Skeleton.tsx'

//목업 자료를 통해서 SPA 형태의 변수 전달을 시험합니다.
const mockup_tags = [
  'RECOIL',
  'REACT',
  'NEXT',
  'GETTER',
  'SETTER',
  'ATTRIBUTE',
  'CLASS',
  'ERROR',
  'DELETE',
  'HELLO',
  'WORLD',
]
const mockup_profileData = {
  src: './src/assets/steve.jpg',
  nickname: 'steve_jobs_at_heaven',
  time: '10분 전에 작성',
  jobTitle: '프론트엔드 개발자',
  workingOn: '애플',
  alarmColor: 'bg-green-500',
  width: 'w-full',
}
const mockup_postAloneData = {
  profile: mockup_profileData,
  title: '주니어일수록 풀스택 개발자가 되어야 하는 이유',
  content:
    "'풀스택 개발자'라는 표현을 쓰면 '풀스택은 잡부다.', '진정한 풀스택은 없다.'와 같은 부정적인 반응을 많이 보게 된다. 그런 반응을 보면 풀스택이라는 표현은 좀 더 조 [더읽기]",
  views: 300,
  likes: 400,
  comments: 400,
  tags: mockup_tags,
}
const mockup_postWithImage = {
  profile: mockup_profileData,
  title: '주니어일수록 풀스택 개발자가 되어야 하는 이유',
  content:
    "'풀스택 개발자'라는 표현을 쓰면 '풀스택은 잡부다.', '진정한 풀스택은 없다.'와 같은 부정적인 반응을 많이 보게 된다. 그런 반응을 보면 풀스택이라는 표현은 좀 더 조 [더읽기]",
  views: 300,
  likes: 400,
  comments: 400,
  tags: mockup_tags,
  imageUrl: 'true',
}

const Home = () => {
  return (
    <div>
      <h1>새 브랜치입니다.</h1>
      <h1 className="text-2xl">
        모든 요소는 외적 요소를 부여하지 않은 레이아웃들 입니다.
      </h1>
      <h1 className="text-4xl mt-16">태그</h1>
      <Tags
        data={mockup_tags}
        width="30rem"
        colorScheme="bg-orange-500 text-black"
        theme="rounded-3xl"
        maxColum={2}
      />
      <h1 className="text-4xl mt-16">프로필</h1>
      <Profile data={mockup_profileData} />
      <h1 className="text-4xl mt-16">포스트</h1>
      <Post width="60rem" height="fit-content" data={mockup_postAloneData} />
      <Post width="60rem" height="fit-content" data={mockup_postWithImage} />
      <h1 className="text-4xl mt-16">스켈레톤 요소</h1>
      <Skeleton width="40rem" height="fit-content" image={false} desc={false} />
    </div>
  )
}

export default Home
