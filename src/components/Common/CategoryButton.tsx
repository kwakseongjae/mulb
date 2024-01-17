import Default from '../../constants/interface.tsx'

const color: Array<string> = [
  'bg-yellow-400 text-yellow-100',
  'bg-green-400 text-green-600',
]
const text: Array<string> = ['DESIGN', 'DEVELOPER']

interface Interface extends Default {
  categoryId: number
}
function CategoryButton({ categoryId, className }: Interface) {
  return (
    <a href="#" className={`w-fit h-fit px-1 ${className} ${color[categoryId]}`}>
      {text[categoryId]}
    </a>
  )
}

export default CategoryButton
