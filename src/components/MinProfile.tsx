import React from 'react'

const default_data = {
  createdData: 'xxxx-xx-xx',
  updatedData: 'xxxx-xx-xx',
  nickName: 'nickname',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
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
          {nickName ? nickName : default_data.nickName}
        </h1>
        <p className="_text-1 _text-color0">
          {createdData ? createdData : default_data.createdData}
        </p>
        <h2 className="_text-1 _text-color1">
          {[
            jobTitle ? jobTitle : default_data.jobTitle,
            ' • ',
            (workingOn ? workingOn : default_data.workingOn) + '에서 근무 중',
          ]
            .join('')
            .trim()}
        </h2>
      </div>
    </div>
  )
}
