import React from 'react'

//Tags 요소가 받아야할 변수입니다.
interface TagsProps extends TagProps {
  data: Array<string>
  width: string
  maxColum: number
  className?: string
}
//Tags에 대한 정의입니다.
export default function Tags({
  data,
  width,
  colorScheme,
  theme,
  maxColum,
  className,
}: TagsProps) {
  //최대 높이를 rem을 통해 정합니다.
  const maxHeight: string = (maxColum * 2.2 + (maxColum - 1)).toString() + 'rem'
  //해당 style은 정적이고 변하지 않습니다. <- 이를 통해서 좀 더 자유롭고 신뢰성있는 Tailwind CSS 사용이 가능합니다.
  const tagsStyle: React.CSSProperteis = {
    display: 'inline-block',
    width: width,
    height: maxHeight,
    overflow: 'hidden',
  }

  //children을 통해 받은 Array<string>을 통해 이를 Tags 요소로 변환하는 논리입니다.
  const tags: Array<React.ReactNode> = []
  data.forEach((tag: string, index: number): void => {
    tags.push(
      <Tag tagName={tag} colorScheme={colorScheme} theme={theme} key={index} />,
    )
  })
  return (
    <div style={tagsStyle} className={className}>
      {tags}
    </div>
  )
}

//아래는 Tag 요소에 관한 정의들입니다.
interface TagProps {
  tagName?: string
  colorScheme?: string
  theme?: string
}
const tagStyle: React.CSSProperties = {
  display: 'inline-block',
  marginRight: '1rem',
  padding: '0.35rem 0.75rem 0.3rem 0.8rem',
  borderRadius: '1rem',
  marginBottom: '1rem',
  fontSize: '1rem',
  fontWeight: '700',
  height: 'fit-content',
}
function Tag({ colorScheme, theme, tagName }: TagProps) {
  return (
    <div className={[colorScheme, theme, 'shadow'].join(' ')} style={tagStyle}>
      {tagName}
    </div>
  )
}
