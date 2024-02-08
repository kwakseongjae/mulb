import ReactDOM from 'react-dom/client'
import App from './App.tsx'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
=======
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'

import '/dist/output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>,
>>>>>>> feat/2-1
)
