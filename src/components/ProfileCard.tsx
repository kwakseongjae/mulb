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

interface ProfileCard {
  nickName: string
  imageUrl: string
  jobTitle: string
  workingOn: string
}

export default function ProfileCard({
  data,
  width,
}: {
  data: ProfileCard
  width: string
}) {
  const { nickName, imageUrl, jobTitle, workingOn } = data
  const profileCardStyle: React.CSSProperties = {
    width: width,
    height: 'fit-content',
  }
  const imageStyle: React.CSSProperties = {
    width: `calc(${width} - 2rem)`,
    height: `calc(${width} - 2rem)`,
  }
  return (
    <div style={profileCardStyle} className="block bg-neutral-100 p-4">
      <img alt="profile_image" style={imageStyle} src={imageUrl} />
      <h1 className="_text-25 -mt-2">{nickName}</h1>
      <h1 className="_text-14 -mt-2">{jobTitle}</h1>
      <h1 className="_text-14">{workingOn}</h1>
    </div>
  )
}
