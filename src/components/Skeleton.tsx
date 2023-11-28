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
  return <div style={skeletonStyle} className={'_bg-skeleton'}></div>
}
