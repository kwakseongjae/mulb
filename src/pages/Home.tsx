import Tags from '@components/Tags.tsx'
import Profile from '@components/Profile.tsx'
import PostWithImage from '@components/PostWithImage.tsx'
import Skeleton from '@components/Skeleton.tsx'

const Home = () => {
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
    alarmColor: 'bg-green-400',
    width: 'w-full',
  }
  const mockup_postData = {
    profile: mockup_profileData,
    title: '주니어일수록 풀스택 개발자가 되어야 하는 이유',
    content:
      "'풀스택 개발자'라는 표현을 쓰면 '풀스택은 잡부다.', '진정한 풀스택은 없다.'와 같은 부정적인 반응을 많이 보게 된다. 그런 반응을 보면 풀스택이라는 표현은 좀 더 조 [더읽기]",
    views: 300,
    likes: 400,
    comments: 400,
    tags: mockup_tags,
  }
  return (
    <div>
      <Tags
        data={mockup_tags}
        width={'30rem'}
        colorScheme={'bg-orange-500 text-black'}
        theme={'rounded-3xl'}
        maxColum={2}
      />
      <Profile data={mockup_profileData} />
      <PostWithImage
        width={'50rem'}
        height={'fit-content'}
        data={mockup_postData}
      />
    </div>
  )
}

export default Home
