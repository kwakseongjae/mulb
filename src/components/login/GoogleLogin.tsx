import '@styles/Login.css'

export default function GoogleLogin() {
  // 구글 로그인 화면으로 이동시키기
  const GOOGLE_URI =
    'http://ec2-43-200-212-212.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google'

  return (
    <a href={GOOGLE_URI}>
      <button>구글 로그인 🚀</button>
    </a>
  )
}
