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
    <div style={profileStyle} className="p-12">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl">✨</h1>
        <h1 className="_text-color-bolder _heading-6 ml-2 pt-2">
          인기있는 주제
        </h1>
      </div>
      <Tags
        data={tags}
        width={`calc(${width} - 2rem)`}
        maxColum={2}
        colorScheme="bg-black text-white"
        theme="rounded-2xl _p-tag _heading-1 _noto-san"
        className="-ml-2"
      />
      <Tags
        data={tags}
        width={`calc(${width} - 2rem)`}
        maxColum={2}
        colorScheme="bg-black text-white"
        theme="rounded-2xl _p-tag _heading-1 _noto-san"
        className="-ml-2 mt-1"
      />
    </div>
  )
}
