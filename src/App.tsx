import GlobalStyles from './styles/GlobalStyles'
import { Home } from './pages/home'
import { Header } from "./components/header";
import { Footer } from './components/footer';
import { Provider } from './context/Provider';

import { Container } from "./styles/container";

export const App =() => {
  return (
    <Provider>
      <Container>
        <Header/>
        <Home/>
        <Footer/>
        <GlobalStyles/>
      </Container>
    </Provider>
  )
}

export default App
