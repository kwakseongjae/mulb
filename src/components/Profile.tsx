import React from 'react'
import Tags from '@components/Tags.tsx'
interface ProfileProps {
  src: string
  nickname: string
  name: string
  title: string
  desc: string
  tags: Array<string>
}

export default function Profile({
  width,
  data,
}: {
  width: string
  data: ProfileProps
}) {
  const profileStyle: React.CSSProperties = {
    width: width,
    overflow: 'hidden',
    maxHeight: '70vh',
  }
  const imageStyle: React.CSSProperties = {
    width: '7rem',
    height: '7rem',
    borderRadius: '50%',
  }
  const { src, nickname, name, title, desc, tags } = data
  return (
    <div style={profileStyle} className="bg-white px-4 pb-4 pt-8">
      <div className="bg-white px-4">
        <img
          src={src}
          alt="profile"
          style={imageStyle}
          width={0}
          height={0}
          sizes="4rem"
        />
        <div className="flex gap-2 mt-8 -mb-4">
          <h1 className="_heading-2 _text-color1">{nickname}</h1>
          <h2 className="_heading-14 _text-color0">{name}</h2>
        </div>
        <h3 className="_text-12 _text-color0 mt-2">{title}</h3>
        <desc className="_text-12 _text-color1 line-clamp-2">{desc}</desc>
        <Tags
          data={tags}
          width={`calc(${width} - 2rem)`}
          maxColum={2}
          colorScheme="bg-black"
          theme="rounded-2xl _p-tag _heading-1 _noto-san"
          className="mt-7 -ml-2"
        />
      </div>
      <div className="_divider-color0 mt-6" />
      <div className="flex ml-2 mt-16 mb-6 items-center">
        <h1 className="text-3xl">✨</h1>
        <h1 className="_text-14 _text-color0 ml-2">흥미있어하는 주제</h1>
      </div>
      <Tags
        data={tags}
        width={`calc(${width} - 2rem)`}
        maxColum={2}
        colorScheme="_bg-color1"
        theme="rounded-2xl _p-tag _heading-1 _noto-san"
        className="ml-3 mb-4 mt-1"
      />
    </div>
  )
}
