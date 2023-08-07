import { useEffect } from "react";
import useMedia from "../../utils/hooks/useMedia";
import { CousesStyle } from "./Couses.style";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactIcon from "../Svg/ReactIcon";
import JavascriptIcon from "../Svg/javascriptIcon";
import HtmlIcon from "../Svg/HtmlIcon";
import CssIcon from "../Svg/CssIcon";
import NextIcon from "../Svg/NextIcon";
import StyledComponentIcon from "../Svg/StyledComponentIcon";
import TailwindIcon from "../Svg/TailwindIcon";
import TypescriptIcon from "../Svg/TypescriptIcon";

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
          <div>
            <h1>Tecnologias</h1>

            <JavascriptIcon />
            <TypescriptIcon />
            <HtmlIcon />
            <CssIcon />
            <ReactIcon />
            <NextIcon />
            <StyledComponentIcon />
            <TailwindIcon />
          </div>
        </section>
      </CousesStyle>
    </>
  );
};
