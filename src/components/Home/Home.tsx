import { useEffect } from "react";
import { HomeStyle } from "./Home.style";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <HomeStyle>
      <h1 data-aos="fade-right">Desenvolvedor</h1>
      <div data-aos="fade-right">
        <p>
          Olá, sou Márcio Brust ! <br /> Confira abaixo meus cursos e projetos.
        </p>
      </div>
    </HomeStyle>
  );
};
