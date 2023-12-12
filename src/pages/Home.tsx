import * as mockupData from '@assets/MockupData.ts'
import Post from '@components/Post.tsx'
import Profile from '@components/Profile.tsx'
import ProfileCard from '@components/ProfileCard.tsx'
const Home = () => {
  return (
    <>
      <section className="_homepage-layout mb-24">
        <div className="_center-parm">
          <h1 className="_text-25">🧑🏼 새로운 사람들을 발견하세요</h1>
          <h2 className="_text-14">
            오늘 관심을 가장 많이 받은 개발자는 누구일까요?
          </h2>
          <div className="w-full flex gap-8 mt-8">
            <ProfileCard data={mockupData.mockup_author} width="20%" />
            <ProfileCard data={mockupData.mockup_author} width="20%" />
            <ProfileCard data={mockupData.mockup_author} width="20%" />
            <ProfileCard data={mockupData.mockup_author} width="20%" />
            <ProfileCard data={mockupData.mockup_author} width="20%" />
          </div>
        </div>
      </section>
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
