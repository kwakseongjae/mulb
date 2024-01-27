import MonthBoard from '@components/section/MonthBoard.tsx'
import LatestBoard from '@components/section/LatestBoard.tsx'
import WeekBoard from '@components/section/WeekBoard.tsx'
import FilteredBoard from '@components/section/FilteredBoard.tsx'

const Home = () => {
  return (
    <main>
      <MonthBoard className="my-8" />
      <WeekBoard className="my-8" />
      <LatestBoard className="my-8" />
      <FilteredBoard className="my-8" />
    </main>
  )
}

export default Home
