import * as mockupData from '@assets/MockupData.ts'
import Tags from '@components/Tags.tsx'
import MinProfile from '@components/MinProfile.tsx'
import Post from '@components/Post.tsx'
import Skeleton from '@components/Skeleton.tsx'
import HeadingButton from '@components/HeadingButton.tsx'
import Profile from '@components/Profile.tsx'

const Home = () => {
  return (
    <div className="my-16">
      <h1>새 브랜치입니다.</h1>
      <h1 className="text-2xl">
        모든 요소는 외적 요소를 부여하지 않은 레이아웃들 입니다.
      </h1>
      <h1 className="text-4xl mt-16">태그</h1>
      <Tags
        data={mockupData.mockup_tags}
        width="30rem"
        colorScheme="bg-orange-500 text-black"
        theme="rounded-3xl"
        maxColum={2}
      />
      <h1 className="text-4xl mt-16">프로필</h1>
      <MinProfile data={mockupData.mockup_profileData} />
      <h1 className="text-4xl mt-16">포스트</h1>
      <Post
        width="58rem"
        height="fit-content"
        data={mockupData.mockup_postAloneData}
      />
      <Post
        width="58rem"
        height="fit-content"
        data={mockupData.mockup_postWithImage}
      />
      <h1 className="text-4xl mt-16">스켈레톤 요소</h1>
      <Skeleton width="40rem" height="fit-content" image={false} desc={false} />
      <h1 className="text-4xl mt-16">헤딩 버튼</h1>
      <HeadingButton
        href="https://google.com"
        className="bg-black text-white my-4"
        icon="https://www.svgrepo.com/show/258893/paper-plane.svg">
        포스트 작성하기
      </HeadingButton>
      <HeadingButton
        href="https://google.com"
        className="bg-black text-white my-4"
        icon="https://www.svgrepo.com/show/258888/chat.svg"
        unActive={true}>
        메세지 보내기
      </HeadingButton>
      <h1 className="text-4xl mt-16">프로파일</h1>
      <Profile width="35rem" data={mockupData.mockup_profile} />
      <Tags
        data={['더 알아보기', '물어보기', '내 포스트', '질문하기']}
        width="34rem"
        maxColum={1}
        colorScheme="text-neutral-400"
        theme="rounded-2xl _p-tag _text-1 _noto-san"
        className="mt-8 ml-2"
      />
    </div>
  )
}

export default Home
