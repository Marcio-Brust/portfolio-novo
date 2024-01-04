import { MouseEvent, useEffect, useState } from "react";
import { ProjectStyle } from "./Projetcts.style";
import coffee from "../../assets/Screenshot from 2023-12-19 19-42-44.png";
import nubank from "../../assets/Screenshot from 2023-12-19 19-45-59.png";
import blog from "../../assets/Screenshot from 2023-12-19 19-47-10.png";
import xadrez from "../../assets/Screenshot from 2023-12-19 19-44-32.png";
import pokemon from "../../assets/Screenshot from 2023-12-19 19-56-47.png";
import fraterb from "../../assets/Screenshot from 2023-12-19 19-54-30.png";
import dogs from "../../assets/Screenshot from 2023-12-19 19-49-24.png";
import rickandmorty from "../../assets/Screenshot from 2023-12-19 19-40-27.png";
import aprovaEnem from "../../assets/Screenshot from 2023-12-19 19-57-53.png";
import nike from "../../assets/Screenshot from 2023-12-20 18-44-36.png";
import PhoroPodDev from "../../assets/Screenshot from 2023-12-19 19-33-01.png";
import mago from "../../assets/WhatsApp Image 2024-01-04 at 09.52.03.jpeg";
import useMedia from "../../utils/hooks/useMedia";
import AOS from "aos";
import "aos/dist/aos.css";
import { Popover } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";

export const Projects = () => {
  const media = useMedia("(max-width:50rem)");
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
      nome: "Fraterb",
      tecnologias: ["Nextjs,Tailwind"],
      url: "https://rocketcard-cmay-3z0djpd81-marcio-brust.vercel.app/",
      urlImg: fraterb,
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
    {
      id: 9,
      nome: "PodDev",
      tecnologias: ["Nextjs, Tailwind"],
      url: "https://poddev.vercel.app/",
      urlImg: PhoroPodDev,
    },
    {
      id: 10,
      nome: "Nike Air",
      tecnologias: ["Nextjs, Tailwind"],
      url: "https://nikeair-marcio-brust.vercel.app/",
      urlImg: nike,
    },
    {
      id: 11,
      nome: "Mago da Loteria",
      tecnologias: ["Nextjs, Tailwind"],
      url: "https://mago-da-loteria-site.vercel.app/",
      urlImg: mago,
    },
  ];

  const [nameProjeto, setNameProjeto] = useState("");
  const [urlProjeto, setUrlProjeto] = useState("");
  const [tecnologias, setTecnologias] = useState<string[]>([]);

  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);

  const handleClick = ({ currentTarget }: MouseEvent<HTMLImageElement>) => {
    setAnchorEl(currentTarget);
    projetos
      .filter(({ id }) => id === +currentTarget.id)
      ?.map(({ nome, url, tecnologias }) => (
        <>
          {setNameProjeto(nome)}
          {setUrlProjeto(url)}
          {setTecnologias(tecnologias)}
        </>
      ));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProjectStyle
      mobile={(media && media.toString()) || null}
      data-aos="fade-right"
    >
      <h1>Meus projetos</h1>
      <section>
        {projetos.map(({ nome, urlImg }, index) => (
          <div key={nome}>
            <img
              id={index.toString()}
              aria-describedby={id}
              onClick={handleClick}
              src={urlImg}
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
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
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
