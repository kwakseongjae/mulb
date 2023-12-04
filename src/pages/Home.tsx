import * as mockupData from '@assets/MockupData.ts'
import Tags from '@components/Tags.tsx'
import MinProfile from '@components/MinProfile.tsx'
import Post from '@components/Post.tsx'
import Skeleton from '@components/Skeleton.tsx'
import HeadingButton from '@components/HeadingButton.tsx'
import Profile from '@components/Profile.tsx'

const Home = () => {
  return (
    <>
      <div className="_homepage-layout">
        <div className="_left-parm">
          <div className="_scroller">
            <Post
              width="100%"
              height="fit-content"
              data={mockupData.mockup_postAloneData}
            />
            <Post
              width="100%"
              height="fit-content"
              data={mockupData.mockup_postWithImage}
            />
            <Post
              width="100%"
              height="fit-content"
              data={mockupData.mockup_postAloneData}
            />
            <Post
              width="100%"
              height="fit-content"
              data={mockupData.mockup_postWithImage}
            />
          </div>
        </div>
        <div className="_right-parm">
          <Profile width="100%" data={mockupData.mockup_profile} />
        </div>
      </div>
    </>
  )
}

export default Home
