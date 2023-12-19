import * as mockupData from '@assets/MockupData.ts'
import Post from '@components/Post.tsx'
import Profile from '@components/Profile.tsx'
import ProfileCard from '@components/ProfileCard.tsx'
const Home = () => {
  return (
    <>
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
