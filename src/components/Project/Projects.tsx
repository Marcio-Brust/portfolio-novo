import { useEffect } from "react";
import { ProjectStyle } from "./Projetcts.style";
import coffee from "../../assets/rocket-coffee.png";
import nubank from "../../assets/Nubank_logo_2021.svg.png";
import blog from "../../assets/post-1.png";
import xadrez from "../../assets/WhatsApp Image 2023-07-29 at 16.40.34.jpeg";
import cardMarcio from "../../assets/WhatsApp Image 2023-07-29 at 16.43.44.jpeg";
import pokemon from "../../assets/pokemon.png";
import dogs from "../../assets/login.jpg";
import useMedia from "../../utils/hooks/useMedia";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  const mobile = useMedia("(max-width:50rem)");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <ProjectStyle aria-expanded={mobile} data-aos="fade-right">
      <h1>Meus projetos</h1>
      <section>
        <div>
          <a
            href="https://marcio-brust.github.io/Projeto-Great-Coffee/Great-Coffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={coffee} alt="cafe" />
          </a>
        </div>
        <div>
          <a
            href="https://marcio-brust.github.io/Projeto-Cart-o-Nubank/Nubank/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nubank} alt="card" />
          </a>
        </div>
        <div>
          <a
            href="https://marcio-brust.github.io/RocketBlog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blog} alt="blog" />
          </a>
        </div>
        <div>
          <a
            href="https://marcio-brust.github.io/Tabuleiro-de-Xadrez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xadrez} alt="xadrez" />
          </a>
        </div>
        <div>
          <a
            href="https://rocketcard-cmay-3z0djpd81-marcio-brust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cardMarcio} alt="cardMarcio" />
          </a>
        </div>
        <div>
          <a
            href="https://pokemon-six-lemon.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pokemon} alt="pokemon" />
          </a>
        </div>
        <div>
          <a
            href="https://dogs-ochre-nine.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dogs} alt="dogs" />
          </a>
        </div>
      </section>
    </ProjectStyle>
  );
};
