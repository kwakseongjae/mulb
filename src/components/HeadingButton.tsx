interface HeadingButtonPorps {
  className?: string
  children: string
  href?: string
  onClick?: () => { void }
}
export default function HeadingButton({
  className,
  children,
  href,
  onClick,
}: HeadingButtonPorps) {
  let clickHandler
  if (href) {
    clickHandler = (): void => {
      window.location.href = href
    }
  } else if (onClick) {
    clickHandler = (): void => {
      clickHandler()
    }
  }
  return (
    <button
      onClick={clickHandler}
      className={['flex w-fit h-fit items-center', className].join(' ').trim()}>
      <svg className="flex w-8 h-8 items-center ml-4" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="white" />
      </svg>
      <h1 className="_heading-16 pt-1 pr-8 pl-8">{children}</h1>
    </button>
  )
}
