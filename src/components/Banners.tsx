import React from 'react'

export default function Banners({ className }: { className?: string }) {
  return (
    <div
      className={['w-full flex gap-6 justify-center', className]
        .join(' ')
        .trim()}>
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </div>
  )
}

function Banner() {
  const BannerStyle: React.CSSProperties = {
    width: '24rem',
    height: 'fit-content',
  }
  return (
    <div className="border p-8 bg-white" style={BannerStyle}>
      <h1 className="_heading-6 _text-color-bolder">새로운 기사</h1>
      <p className="_paragraph-5 _text-color-normal">반갑습니다...</p>
    </div>
  )
}
