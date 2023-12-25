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
  width: 'calc(4rem - 2px)',
  height: 'calc(4rem - 2px)',
  borderRadius: '50%',
  outline: 'solid #e8eaed 1px',
  outlineOffset: '2px',
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
      <img
        src={imageUrl ? imageUrl : default_data.imageUrl}
        alt="profile"
        style={imageStyle}
        width={0}
        height={0}
        sizes="4rem"
        className="ml-4"
      />
      <div className="pl-12">
        <h1 className="_paragraph-4 _text-color-bolder">
          {nickName ? nickName : default_data.nickName}
        </h1>
        <p className="_paragraph-4 _text-color-normal">
          {createdData ? createdData : default_data.createdData}
        </p>
        <h2 className="_paragraph-4 _text-color-bold mt-1">
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
