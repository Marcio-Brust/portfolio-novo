import { useEffect, useState } from "react";
import useMedia from "../../utils/hooks/useMedia";
import { CousesStyle } from "./Couses.style";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactIcon from "../Svg/ReactIcon";
import JavascriptIcon from "../Svg/JavascriptIcon";
import HtmlIcon from "../Svg/HtmlIcon";
import CssIcon from "../Svg/CssIcon";
import NextIcon from "../Svg/NextIcon";
import StyledComponentIcon from "../Svg/StyledComponentIcon";
import TailwindIcon from "../Svg/TailwindIcon";
import TypescriptIcon from "../Svg/TypescriptIcon";
import { Popover, Typography } from "@mui/material";

export const Couses = () => {
  const mobile = useMedia("(max-width:50rem)");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const cursos = [
    {
      título: "JavaScript completo ES6",
      instituicao: "Origamid",
      duracao: "37",
    },
    {
      título: "HTML e CSS para iniciantes",
      instituicao: "Origamid",
      duracao: "23",
    },
    {
      título: "React completo",
      instituicao: "Origamid",
      duracao: "18",
    },
    {
      título: "Typescript para iniciantes",
      instituicao: "Origamid",
      duracao: "11",
    },
    {
      título: "Nextjs do zero ao avançado na pratica 2023",
      instituicao: "Udemy",
      duracao: "13",
    },
  ];

  const [name, setName] = useState<string>("");

  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
    setName(event.currentTarget.id);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CousesStyle aria-expanded={mobile} data-aos="fade-right">
        <h1>Meus cursos</h1>
        <section>
          {cursos.map((item, index) => (
            <div key={index}>
              <h1>{item.título}</h1>
              <p>Instituição: {item.instituicao}</p>
              <p>Duração do curso: {item.duracao} horas</p>
            </div>
          ))}
          <div style={{ padding: "10px" }}>
            <h1>Tecnologias</h1>
            <JavascriptIcon
              style={{ cursor: "pointer" }}
              id="Javascript"
              aria-describedby={id}
              onClick={handleClick}
            />{" "}
            <TypescriptIcon
              style={{ cursor: "pointer" }}
              id="Typescript"
              aria-describedby={id}
              onClick={handleClick}
            />
            <HtmlIcon
              style={{ cursor: "pointer" }}
              id="HTML"
              aria-describedby={id}
              onClick={handleClick}
            />
            <CssIcon
              style={{ cursor: "pointer" }}
              id="CSS"
              aria-describedby={id}
              onClick={handleClick}
            />
            <ReactIcon
              style={{ cursor: "pointer" }}
              id="React"
              aria-describedby={id}
              onClick={handleClick}
            />
            <NextIcon
              style={{ cursor: "pointer" }}
              id="Nextjs"
              aria-describedby={id}
              onClick={handleClick}
            />
            <StyledComponentIcon
              style={{ cursor: "pointer" }}
              id="Styled component"
              aria-describedby={id}
              onClick={handleClick}
            />
            <TailwindIcon
              style={{ cursor: "pointer" }}
              id="Tailwind"
              aria-describedby={id}
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography>
                <p
                  style={{
                    background: "#111",
                    padding: "10px",
                    color: "#f1f1f1",
                    border: "none",
                  }}
                >
                  {name}
                </p>
              </Typography>
            </Popover>
          </div>
        </section>
      </CousesStyle>
    </>
  );
};
