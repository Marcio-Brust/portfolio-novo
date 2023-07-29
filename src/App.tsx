import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { GlobalStyd } from "./GlobalStyled";
import { Couses } from "./components/Courses/Couses";
import { Projects } from "./components/Project/Projects";

function App() {
  return (
    <>
      <GlobalStyd />
      <Header />
      <Home />
      <Couses />
      <Projects />
    </>
  );
}

export default App;
