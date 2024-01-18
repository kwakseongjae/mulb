import Heading from '@components/common/Heading'
import PostCard from '@components/common/PostCard'
import * as mockupData from '@assets/data/MockupData'

export default function UserBoard() {
  return (
    <section className="my-16">
      <Heading
        h1="사용자 이야기"
        h2="우리들이 직접 만들어가는 정보의 바다<br/>어떻게 해야 하는지, 어떤 방향을 가야하는지 서로 공유해요!"
      />
      <div className="_board pt-8">
        <div className="_left-parm">
          <PostCard data={mockupData.postWithImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithImage} width="100%" />
        </div>
        <div className="_right-parm">
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithImage} width="100%" />
          <PostCard data={mockupData.postWithImage} width="100%" />
        </div>
      </div>
    </section>
  )
}
