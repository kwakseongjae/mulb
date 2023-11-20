import Image from 'next/image'

interface ProfileProps {
  nickname: string
  time: string
  jobTitle: string
  workingOn: string
  width: string
  alarmColor: string
}
const imageStyle: object = {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  overflow: 'hidden',
}
export default function Profile({
  nickname,
  time,
  jobTitle,
  workingOn,
  width,
  alarmColor,
}: ProfileProps) {
  return (
    <div className={['flex relative items-center', width].join(' ').trim()}>
      <div className="absolute">
        <Image
          src="/assets/dummy_profile_image.jpg"
          alt=""
          style={imageStyle}
          width={0}
          height={0}
          sizes="4rem"
        />
        <div
          className={['w-5 h-5 absolute top-0 left-11', alarmColor]
            .join(' ')
            .trim()}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div title="void" style={imageStyle} />
      <div className="pl-5">
        <h1 className="font-bold">{nickname}</h1>
        <p className="text-neutral-700">{time}</p>
        <h2 className="text-neutral-400">
          {[jobTitle, ' • ', workingOn + '에서 근무 중'].join('').trim()}
        </h2>
      </div>
    </div>
  )
}
