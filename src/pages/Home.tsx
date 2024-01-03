import NewsBoard from '@components/common/NewsBoard.tsx'
import HomeHeader from '@components/feature/HomeHeader.tsx'
import PopUp from '@components/common/PopUp.tsx'
import MiniBanner from '@components/common/MiniBanner.tsx'
import MultiBlogBoard from '@components/feature/MultiBlogBoard.tsx'
import UserBoard from '@components/feature/UserBoard.tsx'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <NewsBoard className="mt-4 mb-6" />
      <PopUp color="bg-purple-100" />
      <section title="imageboard">
        <div
          style={{
            width: '100%',
            height: '40rem',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
      </section>
      <MultiBlogBoard />
      <MiniBanner
        color="_bg-color-1"
        paragraph="지금까지 총 300개의 글이 작성되었어요!"
      />
      <UserBoard />
    </>
  )
}

export default Home
