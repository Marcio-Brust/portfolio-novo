import { useEffect } from "react";
import useMedia from "../../utils/hooks/useMedia";
import { CousesStyle } from "./Couses.style";
import AOS from "aos";
import "aos/dist/aos.css";

export const Couses = () => {
  const mobile = useMedia("(max-width:50rem)");
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const cursos = [
    {
      título: "JavaScript Completo ES6",
      instituicao: "Origamid",
      duracao: "37",
    },
    {
      título: "HTML e CSS para iniciantes",
      instituicao: "Origamid",
      duracao: "23",
    },
    {
      título: "React Completo",
      instituicao: "Origamid",
      duracao: "18",
    },
    {
      título: "TypeScript para iniciantes",
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
        </section>
      </CousesStyle>
    </>
  );
};
