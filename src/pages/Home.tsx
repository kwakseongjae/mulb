import * as mockupData from '@assets/MockupData.ts'
import Post from '@components/Post.tsx'
import Profile from '@components/Profile.tsx'
import Banners from '@components/Banners.tsx'
const Home = () => {
  return (
    <>
      <div className="w-full h-24 _bg-color-0"></div>
      <div className="w-full h-24 _bg-color-1"></div>
      <Banners />
      <div className="w-full my-8 bg-black" style={{ height: '44rem' }}></div>
      <div className="_homepage_board_layour">
        <div className="_left-parm">
          <Post data={mockupData.postWithImage} width="100%" />
          <Post data={mockupData.postWithoutImage} width="100%" />
          <Post data={mockupData.postWithoutImage} width="100%" />
          <Post data={mockupData.postWithImage} width="100%" />
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
