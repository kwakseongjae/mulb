import * as mockupData from '@assets/MockupData.ts'
import Post from '@components/Post.tsx'
import Banners from '@components/Banners.tsx'
import Tags from '@components/Tags.tsx'
const Home = () => {
  return (
    <>
      <div className="w-full h-24 flex justify-between items-center _border-b-color-0 pl-10 bg-white">
        <div className="flex gap-8">
          <h1 className="_heading-6 _text-color-bold mt-1 tracking-widest">
            MULTI BLOGGING
          </h1>
          <h1 className="_paragraph-4 _text-color-bolder _bg-color-0 px-6 pt-3 pb-2 rounded-2xl tracking-widest border">
            오직 개발자만을 위한 메거진
          </h1>
          <h1 className="_paragraph-4 _text-color-bolder _bg-color-0 px-6 pt-3 pb-2 rounded-2xl tracking-widest border">
            당신을 위해 준비한 새로운 기사들
          </h1>
          <h1 className="_paragraph-4 _text-color-bolder _bg-color-0 px-6 pt-3 pb-2 rounded-2xl tracking-widest border">
            누구나 기자가 될 수 있다
          </h1>
        </div>
        <div className="w-fit h-5/6 bg-neutral-100 flex justify-center items-center mr-5">
          <h1 className="_heading-6 px-16 py-2 _text-color-normal">
            포스트, 계정, 기사를 검색하세요! &ensp; 🔎︎
          </h1>
        </div>
      </div>
      <Banners className="mt-4 mb-6" />
      <div className="bg-purple-100 py-6 flex justify-center relative">
        <h1 className="_paragraph-6">
          <abbr className="_heading-6">사용자 약관</abbr>을 최근에
          변경하였습니다. 이에 관한 <abbr className="_heading-6">변동사항</abbr>
          은 여기를 통해 확인하실 수 있습니다.
        </h1>
        <button className="absolute right-4 h-fit w-12 p-0 m-0 _paragraph-6">
          X
        </button>
      </div>
      <section>
        <div
          style={{
            width: '100%',
            height: '40rem',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
      </section>
      <section className="bg-white my-16">
        <div className="w-full pl-96 mb-12">
          <h2 className="_heading-6 _text-color-3 mb-4">사용자 작성 기사들</h2>
          <h1 className="_heading-8 _text-color-bolder mb-2">
            멀티블로그가 취재하고 조사해서 쓴 기사입니다.
            <br />
            판교와 테헤란로는 현재 어떤 상황인가요?
          </h1>
          <desc className="_paragraph-5 _text-color-normal">
            멀티블로그가 쓴 기사를 만나보세요.
          </desc>
          <Tags
            data={[
              '연봉',
              '기업',
              '인터뷰',
              '취재',
              '개발자 이야기',
              '지역',
              '캐리어',
              '네트워킹',
            ]}
            width="100%"
            className="mt-12"
            maxColum={1}
            colorScheme="bg-neutral-100 _text-color-normal"
          />
        </div>
        <div className="_homepage_board_layout pt-8">
          <div className="_left-parm">
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
          </div>
          <div className="_right-parm">
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-purple-100 py-16 flex justify-center -mb-2">
        <h1 className="_heading-6">어제 동안 3000개의 기사가 작성되었어요!</h1>
      </section>
      <section className="bg-white my-16">
        <div className="w-full pl-96 mb-12">
          <h2 className="_heading-6 _text-color-3 mb-4">사용자 작성 기사들</h2>
          <h1 className="_heading-8 _text-color-bolder mb-4">
            우리들이 직접 만들어가는 정보의 바다
            <br />
            어떻게 해야 하는지, 어떤 방향을 가야하는지 서로 공유해요!
          </h1>
          <desc className="_paragraph-5 _text-color-normal">
            사용자들이 직접 작성한 글을 만나보세요.
          </desc>
          <Tags
            data={[
              '연봉',
              '기업',
              '인터뷰',
              '취재',
              '개발자 이야기',
              '지역',
              '캐리어',
              '네트워킹',
            ]}
            width="100%"
            className="mt-12"
            maxColum={1}
            colorScheme="bg-neutral-100 _text-color-normal"
          />
        </div>
        <div className="_homepage_board_layout pt-8">
          <div className="_left-parm">
            <Post data={mockupData.postWithImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithImage} width="100%" />
          </div>
          <div className="_right-parm">
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithoutImage} width="100%" />
            <Post data={mockupData.postWithImage} width="100%" />
            <Post data={mockupData.postWithImage} width="100%" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
