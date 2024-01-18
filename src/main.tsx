import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { QueryClient } from '@tanstack/react-query'
// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
)
