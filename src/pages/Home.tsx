import NotableBoard from '@components/section/NotableBoard.tsx'
import LatestBoard from '@components/section/LatestBoard.tsx'
import RecentBoard from '@components/section/RecentBoard.tsx'

const Home = () => {
  return (
    <main>
      <NotableBoard />
      <RecentBoard />
      <LatestBoard className="my-4" />
    </main>
  )
}

export default Home
