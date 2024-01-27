import React from 'react'
import { PostResponse } from '../../constants/interface.tsx'
import TextPostCard from '@components/common/TextPostCard.tsx'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

function LatestBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    xl: 'xl:w-auto xl:flex xl:mx-28 xl:gap-4',
    lg: 'lg:w-auto lg:flex lg:mx-16 lg:gap-4',
    md: 'md:w-auto md:flex md:mx-12 md:gap-4',
    sm: 'sm:w-auto sm:flex sm:mx-28 sm:gap-4',
    base: 'w-full grid',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full _float-up'}
      />
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full _float-up'}
      />
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full _float-up'}
      />
      <TextPostCard
        response={PostResponse}
        className={'sm:w-1/4 sm:flex-wrap w-full _float-up'}
      />
    </section>
  )
}

export default LatestBoard
