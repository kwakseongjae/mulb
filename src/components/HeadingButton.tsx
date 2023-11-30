interface HeadingButtonProps {
  className?: string
  children: string
  icon?: string
  href?: string
  onClick?: () => { void }
}
export default function HeadingButton({
  className,
  children,
  icon,
  href,
  onClick,
}: HeadingButtonProps) {
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
      className={['flex w-fit h-fit items-center px-8', className]
        .join(' ')
        .trim()}>
      {icon ? (
        <object className="w-6 h-6 invert" data={icon} type="image/svg+xml" />
      ) : (
        <></>
      )}
      <h1 className="_heading-16 ml-8 mr-4">{children}</h1>
    </button>
  )
}
