//ProfileProps의 변수 정의입니다.
interface MinProfileProps {
  src: string
  nickname: string
  time: string
  jobTitle: string
  workingOn: string
  width: string
  alarmColor: string
}
//image에 대한 style 정의입니다. <- 이미지는 어떤 상황에서 4rem으로 고정되어 표현되어야 합니다.
const imageStyle: object = {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  overflow: 'hidden',
}
//Profile에 관한 정의입니다.
export default function MinProfile({ data }: { data: MinProfileProps }) {
  const { src, nickname, time, jobTitle, workingOn, width, alarmColor } = data
  return (
    <div className={['flex relative items-center', width].join(' ').trim()}>
      <div className="absolute">
        <img
          src={src}
          alt="profile"
          style={imageStyle}
          width={0}
          height={0}
          sizes="4rem"
        />
        <div
          className={['w-4 h-4 absolute top-0 left-12', alarmColor]
            .join(' ')
            .trim()}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div title="void" style={imageStyle} />
      <div className="pl-5">
        <h1 className="_text-1">{nickname}</h1>
        <p className="_text-1 _text-color0">{time}</p>
        <h2 className="_text-1 _text-color1">
          {[jobTitle, ' • ', workingOn + '에서 근무 중'].join('').trim()}
        </h2>
      </div>
    </div>
  )
}
