import '@styles/Skeleton.css'

interface SkeletonProps {
  width: string
  height: string
  image: boolean
  desc: boolean
}
export default function Skeleton({
  width,
  height,
  image,
  desc,
}: SkeletonProps) {
  const skeletonStyle = {
    width: width,
    height: height,
  }
  if (image) {
    return <div className={'_bg-skeleton w-full h-20'} style={skeletonStyle} />
  }
  return (
    <div
      className={'grid p-4 gap-2 bg-neutral-800 rounded-2xl overflow-hidden'}
      style={skeletonStyle}
    >
      <div className={'_bg-skeleton w-full h-40'} />
      <div className={'_bg-skeleton w-full h-8'} />
      <div className={'_bg-skeleton w-full h-8'} />
      <div className={'_bg-skeleton w-full h-8'} />
      <div className={'flex gap-8 w-1/2 h-8'}>
        <div className={'_bg-skeleton'} />
        <div className={'_bg-skeleton'} />
        <div className={'_bg-skeleton'} />
      </div>
    </div>
  )
}
