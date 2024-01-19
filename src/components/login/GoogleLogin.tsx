import '@styles/Login.css'

export default function GoogleLogin() {
  // 구글 로그인 화면으로 이동시키기
  const GOOGLE_URI = `http://ec2-43-200-212-212.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google?client_id=${'import.meta.env.VITE_APP_GOOGLE_AUTH_CLIENT_ID'}&redirect_uri=${'import.meta.env.VITE_APP_CLIENT_DOMAIN'}/authgoogle&response_type=code&scope=email`

  return (
    <a href={GOOGLE_URI}>
      <button>구글 로그인 🚀</button>
    </a>
  )
}
