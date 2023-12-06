//ProfileProps의 변수 정의입니다.
import React from 'react'

const default_data = {
  createdData: 'xxxx-xx-xx',
  updatedData: 'xxxx-xx-xx',
  nickName: 'nickname',
  imageUrl: null,
  jobTitle: '개발자',
  workingOn: '구글',
}

interface MinProfileProps {
  createdDate: string
  updatedDate: string
  nickName: string
  imageUrl: string | null
  jobTitle?: string
  workingOn?: string
}
//image에 대한 style 정의입니다. <- 이미지는 어떤 상황에서 4rem으로 고정되어 표현되어야 합니다.
const imageStyle: React.CSSProperties = {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  overflow: 'hidden',
}

export default function MinProfile({
  data,
  width,
}: {
  data: MinProfileProps
  width: string
}) {
  const { createdData, nickName, imageUrl, jobTitle, workingOn } = data
  return (
    <div className={['flex relative items-center', width].join(' ').trim()}>
      <div className="absolute">
        <img
          src={imageUrl ? imageUrl : default_data.imageUrl}
          alt="profile"
          style={imageStyle}
          width={0}
          height={0}
          sizes="4rem"
        />
      </div>
      <svg
        viewBox="0 0 110 110"
        fill="black"
        className="w-4 h-4 left-12 top-0 absolute">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <div title="void" style={imageStyle} />
      <div className="pl-5">
        <h1 className="_text-1">
          {nickName ? default_data.nickName : nickName}
        </h1>
        <p className="_text-1 _text-color0">
          {createdData ? default_data.createdData : createdData}
        </p>
        <h2 className="_text-1 _text-color1">
          {[
            jobTitle ? jobTitle : default_data.jobTitle,
            ' • ',
            workingOn ? workingOn : default_data.workingOn + '에서 근무 중',
          ]
            .join('')
            .trim()}
        </h2>
      </div>
    </div>
  )
}
