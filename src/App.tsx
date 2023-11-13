import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { GlobalStyled } from "./GlobalStyled";
import { Couses } from "./components/Courses/Couses";
import { Projects } from "./components/Project/Projects";
import { MenuContextProvider } from "./context/useMenuContext";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <MenuContextProvider>
        <GlobalStyled />
        <Header />
        <Home />
        <Couses />
        <Projects />
        <Footer />
      </MenuContextProvider>
    </>
  );
}

export default App;
