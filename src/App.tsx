import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { GlobalStyd } from "./GlobalStyled";
import { Couses } from "./components/Courses/Couses";

function App() {
  return (
    <>
      <GlobalStyd />
      <Header />
      <Home />
      <Couses />
    </>
  );
}

export default App;
