import React from 'react'
import { useEffect } from 'react'
import TailwindProperties from '@utils/tailwindProperties.ts'
import Default from '@utils/interface.ts'

function Navigator(className): Default {
  useEffect((): void => {
    const navigator: HTMLElement | null = document.getElementById(id)
    window.addEventListener('scroll', (): void => {
      if (navigator === null) return
      navigator.style.transition = '1s ease-in-out'
      window.addEventListener('scroll', (): void => {
        if (navigator === null) return
        if (window.scrollY > 1) {
          navigator.style.transform = 'translateY(calc(-100% + 3rem))'
        } else {
          navigator.style.transform = 'translateY(0)'
        }
      })
    })
  }, [])
  const id: string = 'navigator--'
  const style: TailwindProperties = {
    sm: 'sm:w-full sm:h-16 sm:fixed sm:top-0 sm:left-0 sm:bg-black',
    base: 'w-full h-16 fixed top-0 left-0 bg-black',
  }
  return (
    <section>
      <div className={`${style.sm} ${style.base} ${className}`} id={id}>
        <h1>HELLO</h1>
      </div>
      <div className="w-full h-12" />
    </section>
  )
}

export default Navigator
