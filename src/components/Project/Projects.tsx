import { useEffect, useState } from "react";
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
import { Popover } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import ReactIcon from "../Svg/ReactIcon";

export const Projects = () => {
  const mobile = useMedia("(max-width:50rem)");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const projetos = [
    {
      nome: "Great coffee",
      tecnologias: "Javascript, HTML e CSS",
      url: "https://marcio-brust.github.io/Projeto-Great-Coffee/Great-Coffee/",
      urlImg: coffee,
    },
    {
      nome: "Cartão nubank",
      tecnologias: "Javascript, HTML e CSS",
      url: "https://marcio-brust.github.io/Projeto-Cart-o-Nubank/Nubank/",
      urlImg: nubank,
    },
    {
      nome: "RocketBlog",
      tecnologias: "Javascript, HTML e CSS",
      url: "https://marcio-brust.github.io/RocketBlog/",
      urlImg: blog,
    },
    {
      nome: "Tabuleiro de xadrez",
      tecnologias: "Javascript, HTML e CSS",
      url: "https://marcio-brust.github.io/Tabuleiro-de-Xadrez/",
      urlImg: xadrez,
    },
    {
      nome: "Card-Git Márcio",
      tecnologias: "React",
      url: "https://rocketcard-cmay-3z0djpd81-marcio-brust.vercel.app/",
      urlImg: cardMarcio,
    },
    {
      nome: "Pokemon",
      tecnologias: "React",
      url: "https://pokemon-six-lemon.vercel.app",
      urlImg: pokemon,
    },
    {
      nome: "Dogs",
      tecnologias: "React",
      url: "https://dogs-ochre-nine.vercel.app",
      urlImg: dogs,
    },
  ];

  return (
    <ProjectStyle aria-expanded={mobile} data-aos="fade-right">
      <h1>Meus projetos</h1>
      <section>
        {projetos.map((item) => (
          <div key={item.nome}>
            <img
              id={item.nome}
              aria-describedby={id}
              onClick={handleClick}
              src={item.urlImg}
              alt="img"
            />

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
            >
              <h1>{item.nome}</h1>
              <Typography>
                <a href={item.url} target="_blank">
                  Confira o projeto: Click aqui
                </a>
              </Typography>
            </Popover>
          </div>
        ))}
      </section>
    </ProjectStyle>
  );
};
