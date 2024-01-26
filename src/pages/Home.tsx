import NotableBoard from '@components/section/NotableBoard.tsx'
import LatestBoard from '@components/section/LatestBoard.tsx'
import RecentBoard from '@components/section/RecentBoard.tsx'
import FilteredBoard from '@components/section/FilteredBoard.tsx'

const Home = () => {
  return (
    <main>
      <NotableBoard className="my-8" />
      <RecentBoard className="my-8" />
      <LatestBoard className="my-8" />
      <FilteredBoard className="my-8" />
    </main>
  )
}

export default Home
