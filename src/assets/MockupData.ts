export const mockup_tags = [
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
]
export const mockup_profileData = {
  src: './src/assets/steve.jpg',
  nickname: 'steve_jobs_at_heaven',
  time: '10분 전에 작성',
  jobTitle: '프론트엔드 개발자',
  workingOn: '애플',
  alarmColor: '#1a8917',
  width: 'w-full',
}
export const mockup_author = {
  createdDate: 'string',
  updatedDate: 'string',
  nickName: 'string',
  imageUrl:
    'https://velog.velcdn.com/images/eunbinn/post/62acd634-5c39-4901-8522-edc88d03169a/image.jpeg',
  jobTitle: '프론트엔드 개발자',
  workingOn: 'google',
}
export const mockup_postAloneData = {
  title: '[번역] 새로운 리액트 문서에서 제시하는 9가지 권장 사항',
  content:
    '일반적으로 새로운 소프트웨어 개발팀이 구성되면 팀이 코드를 정확히 어떻게 작성할 것인지에 대한 논의가 이루어집니다. 프로그래밍 언어나 주요 프레임워크의 메인테이너가 이에 대해 의견을 가지고 있다면 이러한 논의의 기본적인 출발점을 제공하는 데 도움이 될 수 있습니다.',
  thumbnailUrl:
    'https://velog.velcdn.com/images/eunbinn/post/62acd634-5c39-4901-8522-edc88d03169a/image.jpeg',
  author: mockup_author,
  /*아직 백엔드에 추가되지 않은 기능입니다.*/
  views: 124,
  likes: 61,
  comments: 12,
  tags: mockup_tags,
}
export const mockup_postWithImage = {
  profile: mockup_profileData,
  title: '주니어일수록 풀스택 개발자가 되어야 하는 이유',
  content:
    "'풀스택 개발자'라는 표현을 쓰면 '풀스택은 잡부다.', '진정한 풀스택은 없다.'와 같은 부정적인 반응을 많이 보게 된다. 그런 반응을 보면 풀스택이라는 표현은 좀 더 조 [더읽기]",
  views: 300,
  likes: 400,
  comments: 400,
  tags: mockup_tags,
  imageUrl: 'true',
}
export const mockup_profile = {
  src: './src/assets/steve.jpg',
  nickname: 'steve_at_heaven',
  name: 'me',
  title: '아이돌 개발자',
  desc: '애플의 기획자 스티브 잡스입니다. 저는 아직 살아있습니다. 여러분의 가슴속에서...',
  tags: mockup_tags,
}
