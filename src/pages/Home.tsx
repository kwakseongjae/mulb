import * as mockupData from '@assets/MockupData.ts'
import PostCard from '@components/Common/PostCard.tsx'
import Banners from '@components/Common/Banners.tsx'
import HomeHeader from '@components/feature/HomeHeader.tsx'
import PopUp from '@components/Common/PopUp.tsx'
import Title from '@components/Common/Title.tsx'
import PersonalHeader from '@components/feature/PersonalHeader.tsx'
const Home = () => {
  return (
    <>
      <HomeHeader />
      <PersonalHeader />
      <Banners className="mt-4 mb-6" />
      <PopUp color="bg-purple-100" />
      <section>
        <div
          style={{
            width: '100%',
            height: '40rem',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
      </section>
      <section className="my-16">
        <Title
          h1="멀티블로그 이야기"
          h2="저희가 직접 취재하고 수집해서 만든 정보입니다. /n 현재 강남과 판교에선 무슨 일이 벌어지고 있나요?"
          desc="매주 새로운 기사가 올라옵니다. 기자들이 직접 작성한 전문적인 기사입니다."
        />
        <div className="_board pt-8">
          <div className="_left-parm">
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
          </div>
          <div className="_right-parm">
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-neutral-200 py-16 flex justify-center -mb-2">
        <h1 className="_paragraph-6 _text-color-bold">
          매일매일 새로운 소식이 온다! 어제 동안에
          <abbr className="_heading-6 _text-color-bolder"> 3000개의 기사</abbr>가
          작성되었어요!
        </h1>
      </section>
      <section className="my-16">
        <Title
          h1="사용자 이야기"
          h2="우리들이 직접 만들어가는 정보의 바다/n어떻게 해야 하는지, 어떤 방향을 가야하는지 서로 공유해요!"
          desc="사용자들이 직접 작성한 기사입니다."
        />
        <div className="_board pt-8">
          <div className="_left-parm">
            <PostCard data={mockupData.postWithImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithImage} width="100%" />
          </div>
          <div className="_right-parm">
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithoutImage} width="100%" />
            <PostCard data={mockupData.postWithImage} width="100%" />
            <PostCard data={mockupData.postWithImage} width="100%" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
