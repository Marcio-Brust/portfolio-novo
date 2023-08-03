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
          Olá, sou Márcio Brust <br />
          Estou aqui hoje para apresentar meu portfólio como estudante de
          programação. Sou apaixonado por tecnologia e desenvolvimento de
          software, e ao longo dos últimos anos, tenho me dedicado a aprimorar
          minhas habilidades e conhecimentos nessa área. Antes de prosseguir,
          gostaria de compartilhar um pouco sobre minha trajetória como
          estudante de programação. Minha jornada começou com a curiosidade em
          entender como os aplicativos e sites que utilizava eram criados. Essa
          curiosidade me levou a mergulhar no mundo da programação, onde tive a
          oportunidade de aprender a desenvolver softwares. Confira abaixo
          alguns cursos e projetos.
        </p>
      </div>
    </HomeStyle>
  );
};
