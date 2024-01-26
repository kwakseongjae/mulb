import React, { MutableRefObject, useRef } from 'react'
import Default from '@utils/interface'
import TailwindProperties from '@utils/tailwindProperties.ts'
import { Post, PostResponse } from '../../constants/interface.tsx'
import { DefaultPostCard } from '@components/common/DefaultPostCard.tsx'

function FilteredBoard({ className }: Default) {
  const cats: MutableRefObject<Array<number>> = useRef([0])
  const style: TailwindProperties = {
    sm: 'sm:w-auto sm:mx-60',
    base: 'w-full',
  }
  const filter: TailwindProperties = {
    sm: 'sm:p-4 sm:bg-neutral-100 sm:border',
    base: '',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <div title="filter" className={`${filter.sm} ${filter.base}`}>
        <h1 className="text-xl font-bold">FILTER</h1>
        <ul className="w-full block">
          <button className="inline-block w-fit mr-4 bg-white">Design</button>
          <button className="inline-block w-fit mr-4">Dev Story</button>
          <button className="inline-block w-fit mr-4">Networking</button>
          <button className="inline-block w-fit mr-4">Technology</button>
        </ul>
      </div>
      <Board cats={cats} />
    </section>
  )
}
export default FilteredBoard

function Board({ className }: Default) {
  const style: TailwindProperties = {
    sm: '',
    base: 'w-full',
  }
  return (
    <section className={`${style.sm} ${style.base} ${className}`}>
      <DefaultPostCard response={PostResponse} />
      <DefaultPostCard response={PostResponse} />
      <DefaultPostCard response={PostResponse} />
      <DefaultPostCard response={PostResponse} />
      <DefaultPostCard response={PostResponse} />
    </section>
  )
}
