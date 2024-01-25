import Heading from '@components/common/Heading'
import PostCard from '@components/common/PostCard'
import * as mockupData from '@assets/data/MockupData'

export default function MultiBlogBoard() {
  return (
    <section className="my-16">
      <Heading
        h1="멀티블로그 이야기"
        h2="저희가 직접 취재하고 수집해서 만든 정보입니다.<br/>현재 강남과 판교에선 무슨 일이 벌어지고 있나요?"
      />
      <div className="_board pt-8">
        <div className="_left-parm">
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
        </div>
        <div className="_right-parm">
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
          <PostCard data={mockupData.postWithoutImage} width="100%" />
        </div>
      </div>
    </section>
  )
}
