import { CousesStyle } from "./Couses.style";

export const Couses = () => {
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
      título: "React COmpleto",
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
      <CousesStyle>
        <h1>Meus cursos</h1>
        <section>
          {cursos.map((item, index) => (
            <div key={index}>
              <h1>{item.título}</h1>
              <p>Instuição: {item.instituicao}</p>
              <p>Duração do curso: {item.duracao} horas</p>
            </div>
          ))}
        </section>
      </CousesStyle>
    </>
  );
};
