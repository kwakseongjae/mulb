import Tags from '@components/Tags.tsx'
import Profile from '@components/Profile.tsx'

const Home = () => {
  return (
    <div>
      <h1 className={'text-3xl'}>Tags Component</h1>
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
      <h1 className={'text-3xl'}>Profile Component</h1>
      <Profile
        src={'./src/assets/steve.jpg'}
        nickname={'steve_jobs_at_heaven'}
        time={'10분 전에 작성'}
        jobTitle={'프론트엔드 개발자'}
        workingOn={'애플'}
        alarmColor={'bg-green-400'}
        width={'w-full'}
      />
    </div>
  )
}

export default Home
