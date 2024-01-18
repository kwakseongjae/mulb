import React from 'react'
import Tags from './Tags'

interface HeadingInterface {
  h1: string
  h2: string
  // desc: string
}

const HeadingStyle: React.CSSProperties = {
  width: '100%',
  height: 'fit-content',
}

export default function Heading({ h1, h2 }: HeadingInterface) {
  return (
    <div style={HeadingStyle} className="grid justify-center">
      <div className="_center-parm">
        <h1
          className="_heading-6 _text-color-3 mb-6"
          dangerouslySetInnerHTML={{ __html: h1 }}
        />
        <h2
          className="_heading-16 _text-color-bolder mb-4"
          dangerouslySetInnerHTML={{ __html: h2 }}
        />
        {/* <desc
          className="_paragraph-5 _text-color-normal"
          dangerouslySetInnerHTML={{ __html: desc }}
        /> */}
        <Tags
          data={[
            '연봉',
            '기업',
            '인터뷰',
            '취재',
            '개발자 이야기',
            '지역',
            '캐리어',
            '네트워킹',
          ]}
          width="100%"
          className="mt-12"
          maxColum={1}
          colorScheme="bg-neutral-100 _text-color-normal"
        />
      </div>
    </div>
  )
}
