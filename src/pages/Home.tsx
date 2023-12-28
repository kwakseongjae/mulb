import * as mockupData from '@assets/MockupData.ts'
import Post from '@components/Post.tsx'
import Profile from '@components/Profile.tsx'
import Banners from '@components/Banners.tsx'
import { Input } from '@tanstack/react-query-devtools/build/lib/styledComponents'
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
      <div
        className="w-full"
        style={{
          height: '44rem',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}></div>
      <div className="_homepage_board_layout pt-8">
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
