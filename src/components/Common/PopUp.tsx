import React from 'react'
const PopUpStyle: React.CSSProperties = {
  width: '100%',
  padding: '1.5rem 0 1.5rem 0',
}

// status 대신에 Document를 사용합니다.
export default function PopUp({ color }: { color: string }) {
  const PopUpID: string = 'homepage-popup'
  const clickHandler = (): void => {
    const PopUp: Node | null = document.getElementById(PopUpID)
    if (PopUp === null) return
    PopUp.remove()
  }
  return (
    <div
      id={PopUpID}
      style={PopUpStyle}
      className={['absolute flex justify-center', color].join(' ').trim()}>
      <h1 className="_paragraph-6">
        <abbr className="_heading-6">사용자 약관</abbr>을 최근에 변경하였습니다.
        이에 관한 <abbr className="_heading-6">변동사항</abbr>은 여기를 통해
        확인하실 수 있습니다.
      </h1>
      <button
        className="absolute right-0 top-4 w-12 h-12 p-0 _heading-6 _text-color-normal mr-10"
        onClick={clickHandler}>
        X
      </button>
    </div>
  )
}
