interface HeadingButtonProps {
  type?: string
  className?: string
  children: string
  icon?: string
  href?: string
  onClick?: () => { void }
  unActive?: boolean
}
export default function HeadingButton({
  type,
  className,
  children,
  icon,
  href,
  onClick,
  unActive,
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
      className={[
        'flex w-fit h-fit items-center px-6 py-4 hover:bg-neutral-700',
        className,
        type,
        unActive || href === '' ? '_unactive' : '',
      ]
        .join(' ')
        .trim()}>
      {icon ? (
        <object className="w-6 h-6 invert" data={icon} type="image/svg+xml" />
      ) : (
        <></>
      )}
      <h1 className="_heading-16 ml-6 mr-2">{children}</h1>
    </button>
  )
}
