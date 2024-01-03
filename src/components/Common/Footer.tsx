import React from 'react'
import { Link } from 'react-router-dom'

const FooterStyle: React.CSSProperteis = {
  width: '100%',
  height: '40rem',
}

export default function Footer() {
  return (
    <div className="_bg-color-0" style={FooterStyle}>
      <div className="justify-center items-center">
        <Link to="../src/pages/Personal">개인 페이지로 이동하기</Link>
      </div>
    </div>
  )
}
