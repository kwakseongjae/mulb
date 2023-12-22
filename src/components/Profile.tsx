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
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
  }
  const { src, nickname, name, title, desc, tags } = data
  return (
    <div
      style={profileStyle}
      className="px-8 pb-8 pt-12 rounded-2xl bg-neutral-100">
      <div className="px-4">
        <img
          src={src}
          alt="profile"
          style={imageStyle}
          width={0}
          height={0}
          sizes="4rem"
        />
        <div className="flex mt-6">
          <h1 className="_heading-2 text-black">{nickname}</h1>
          <h2 className="_heading-14 _text-color0 ml-2">{name}</h2>
        </div>
        <h3 className="_text-12 _text-color1">{title}</h3>
        <desc className="_text-12 _text-color0 line-clamp-2 mt-1">{desc}</desc>
        <Tags
          data={tags}
          width={`calc(${width} - 2rem)`}
          maxColum={2}
          colorScheme="bg-green-400 text-white"
          theme="rounded-2xl _p-tag _heading-1 _noto-san"
          className="mt-7 -ml-2"
        />
      </div>
      <div className="flex ml-2 mt-8 mb-6 items-center">
        <h1 className="text-3xl">✨</h1>
        <h1 className="_text-14 _text-color1 ml-2">흥미있어하는 주제</h1>
      </div>
      <Tags
        data={tags}
        width={`calc(${width} - 2rem)`}
        maxColum={2}
        colorScheme="bg-white text-black"
        theme="rounded-2xl _p-tag _heading-1 _noto-san"
        className="ml-3 mb-4 mt-1"
      />
    </div>
  )
}
