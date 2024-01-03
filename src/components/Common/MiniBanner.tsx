const MiniBannerStyle: React.CSSProperteis = {
  width: '100%',
  height: '6rem',
}
export default function MiniBanner({
  paragraph,
  color,
}: {
  paragraph: string
  color: string
}) {
  return (
    <div
      className={['flex justify-center items-center', color].join(' ').trim()}
      style={MiniBannerStyle}>
      <h1 className="_paragraph-6 mt-1">{paragraph}</h1>
    </div>
  )
}
