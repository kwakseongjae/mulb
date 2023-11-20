import Tags from '@components/Tags.tsx'

const Home = () => {
  return (
    <div>
      <Tags
        width={'40rem'}
        colorScheme={'bg-neutral-200 text-black'}
        theme={'rounded-3xl'}
        maxColum={2}
      >
        {[
          'RECOIL',
          'REACT',
          'NEXT',
          'GETTER',
          'SETTER',
          'ATTRIBUTE',
          'CLASS',
          'ERROR',
          'DELETE',
          'HELLO',
          'WORLD',
        ]}
      </Tags>
    </div>
  )
}

export default Home
