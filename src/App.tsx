import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./pages/Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
