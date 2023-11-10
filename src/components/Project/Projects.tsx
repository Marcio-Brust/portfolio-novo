import { useEffect, useState } from "react";
import { ProjectStyle } from "./Projetcts.style";
import coffee from "../../assets/rocket-coffee.png";
import nubank from "../../assets/Nubank_logo_2021.svg.png";
import blog from "../../assets/post-1.png";
import xadrez from "../../assets/WhatsApp Image 2023-07-29 at 16.40.34.jpeg";
import cardMarcio from "../../assets/WhatsApp Image 2023-07-29 at 16.43.44.jpeg";
import pokemon from "../../assets/pokemon.png";
import dogs from "../../assets/login.jpg";
import rickandmorty from "../../assets/515-5152607_freetoedit-cute-rick-morty-rickandmorty-wallpaper-black-and.png";
import aprovaEnem from "../../assets/logo_home.webp";
import useMedia from "../../utils/hooks/useMedia";
import AOS from "aos";
import "aos/dist/aos.css";
import { Popover } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";

export const Projects = () => {
  const mobile = useMedia("(max-width:50rem)");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const projetos = [
    {
      id: 0,
      nome: "Great coffee",
      tecnologias: ["Javascript", "HTML", "CSS"],
      url: "https://marcio-brust.github.io/Projeto-Great-Coffee/Great-Coffee/",
      urlImg: coffee,
    },
    {
      id: 1,
      nome: "Cartão nubank",
      tecnologias: ["Javascript", "HTML", "CSS"],
      url: "https://marcio-brust.github.io/Projeto-Cart-o-Nubank/Nubank/",
      urlImg: nubank,
    },
    {
      id: 2,
      nome: "RocketBlog",
      tecnologias: ["Javascript", "HTML", "CSS"],
      url: "https://marcio-brust.github.io/RocketBlog/",
      urlImg: blog,
    },
    {
      id: 3,
      nome: "Tabuleiro de xadrez",
      tecnologias: ["Javascript", "HTML", "CSS"],
      url: "https://marcio-brust.github.io/Tabuleiro-de-Xadrez/",
      urlImg: xadrez,
    },
    {
      id: 4,
      nome: "Card-Git Márcio",
      tecnologias: ["React"],
      url: "https://rocketcard-cmay-3z0djpd81-marcio-brust.vercel.app/",
      urlImg: cardMarcio,
    },
    {
      id: 5,
      nome: "Pokemon",
      tecnologias: ["React"],
      url: "https://pokemon-six-lemon.vercel.app",
      urlImg: pokemon,
    },
    {
      id: 6,
      nome: "Dogs",
      tecnologias: ["React"],
      url: "https://dogs-ochre-nine.vercel.app",
      urlImg: dogs,
    },
    {
      id: 7,
      nome: "The Rick and Morty",
      tecnologias: ["Nextjs"],
      url: "https://rick-and-morty-omega-bay.vercel.app/",
      urlImg: rickandmorty,
    },
    {
      id: 8,
      nome: "Aprova no Enem",
      tecnologias: ["Nextjs, Tailwind"],
      url: "https://aprova-no-enem.vercel.app/",
      urlImg: aprovaEnem,
    },
  ];

  const [nameProjeto, setNameProjeto] = useState<string>("");
  const [urlProjeto, setUrlProjeto] = useState<string>("");
  const [tecnologias, setTecnologias] = useState<string[]>([]);

  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
    projetos
      .filter((item) => item.id === +event.currentTarget.id)
      ?.map((item) => (
        <>
          {setNameProjeto(item.nome)}
          {setUrlProjeto(item.url)}
          {setTecnologias(item.tecnologias)}
        </>
      ));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProjectStyle aria-expanded={mobile} data-aos="fade-right">
      <h1>Meus projetos</h1>
      <section>
        {projetos.map((item, index) => (
          <div key={item.nome}>
            <img
              id={index.toString()}
              aria-describedby={id}
              onClick={handleClick}
              src={item.urlImg}
              alt="img"
            />
          </div>
        ))}

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
          <div
            style={{
              padding: "10px",
              display: "grid",
              gap: "10px",
              background: "#111",
              border: "none",
            }}
          >
            <h1>{nameProjeto}</h1>
            <p>
              Tecnologias:{" "}
              {tecnologias.map((nome) => (
                <span key={nome} style={{ marginRight: "5px" }}>
                  {nome}
                </span>
              ))}
            </p>
            <Typography>
              <a href={urlProjeto} target="_blank">
                Confira o projeto:{" "}
                <span style={{ color: "#777" }}> Click aqui</span>
              </a>
            </Typography>
          </div>
        </Popover>
      </section>
    </ProjectStyle>
  );
};
