import React from 'react'
const TopBannerStyle: React.CSSProperties = {
  width: '100%',
  height: '6rem',
  padding: '0 0 0 3rem',
}
export default function NewsBoard() {
  return (
    <div
      style={TopBannerStyle}
      className="flex justify-between items-center _border-b-color-0">
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
  )
}
