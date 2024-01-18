import NotableBoard from '@components/feature/NotableBoard.tsx'
import RecentBoard from '@components/feature/RecentBoard.tsx'
import LatestBoard from '@components/feature/LatestBoard.tsx'

const Home = () => {
  return (
    <main>
      <section title="main" className="w-full px-40">
        <NotableBoard className="pt-8 pb-4 px-4" />
        <RecentBoard />
        <LatestBoard className="mt-24" />
      </section>
    </main>
  )
}

export default Home
