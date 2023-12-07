import * as mockupData from '@assets/MockupData.ts'
import Post from '@components/Post.tsx'
import Profile from '@components/Profile.tsx'
import ProfileCard from '@components/ProfileCard.tsx'
const Home = () => {
  return (
    <>
      <section className="w-full h-fit bg-white grid justify-center pb-8 pt-24">
        <h1 className="_text-25">🧑🏼 새로운 사람들을 발견하세요</h1>
        <h2 className="_text-14">
          오늘 관심을 가장 많이 받은 개발자는 누구일까요?
        </h2>
        <div className="w-fit grid pb-4 _grid-template-8">
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
          <ProfileCard data={mockupData.mockup_author} width="14rem" />
        </div>
      </section>
      <div className="w-full h-16 bg-emerald-300" />
      <div className="w-full h-16 bg-emerald-400" />
      <div className="w-full h-16 bg-emerald-500" />
      <div className="h-8" />
      <div className="_homepage-layout">
        <div className="_left-parm">
          <Post data={mockupData.mockup_postAloneData} width="100%" />
          <Post data={mockupData.mockup_postAloneData} width="100%" />
          <Post data={mockupData.mockup_postAloneData} width="100%" />
          <Post data={mockupData.mockup_postAloneData} width="100%" />
        </div>
        <div className="_right-parm">
          <div className="_scroller">
            <Profile width="100%" data={mockupData.mockup_profile} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
