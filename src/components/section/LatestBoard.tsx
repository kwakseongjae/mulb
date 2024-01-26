import React from 'react'
import { PostResponse } from '../../constants/interface.tsx'
import TextPostCard from '@components/common/TextPostCard.tsx'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

function LatestBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    sm: 'sm:w-auto sm:flex sm:mx-28 sm:gap-4',
    base: 'w-full grid',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full'}
      />
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full'}
      />
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full'}
      />
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full'}
      />
    </section>
  )
}

export default LatestBoard
