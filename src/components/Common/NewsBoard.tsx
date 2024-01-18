import React from 'react'

export default function NewsBoard({ className }: { className?: string }) {
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

const BannerStyle: React.CSSProperties = {
  width: '24rem',
  height: 'fit-content',
}

function Banner() {
  return (
    <div className="border p-8 rounded-2xl" style={BannerStyle}>
      <h1 className="">새로운 기사</h1>
      <p className="">반갑습니다..</p>
    </div>
  )
}
