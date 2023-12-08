"use client";
import Projects from "@/components/Projects";
import Hobby from "@/components/hobbies";
import Widgets from "@/components/widgets";
import { siteConfig } from "@/config/site";
import { Card, CardBody, Chip, Image, Tooltip } from "@nextui-org/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const startYear = 2019;
    const currentYear = new Date().getFullYear();
    const experience = currentYear - startYear;

    setYearsOfExperience(experience);
  }, []);

  return (
    <>
      <section className="flex  items-center justify-center  ">
        <Card className="w-full  bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <CardBody className="flex  flex-col   gap-8 md:flex-row justify-center items-center backdrop-blur-none">
            <Image
              isZoomed
              as={NextImage}
              width={300}
              height={300}
              alt="Main Photo"
              src="/photo.jpg"
              className="w-96"
            />
            <div className="md:text-left text-center ">
              <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
              <h2 className="text-2xl">{siteConfig.description}</h2>
              <br />
              <p className="text-xl">
                Desenvolvedor com {yearsOfExperience} anos de experiência em
                desenvolvimento e manutenção de sites e aplicativos de alta
                qualidade
              </p>
            </div>
          </CardBody>{" "}
        </Card>
      </section>
      <section
        className="flex flex-col items-center justify-center my-32"
        id="#about"
      >
        <Card className="w-full  bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10   p-4">
          <CardBody className="flex  flex-col   gap-8 justify-center items-center  ">
            <h1 className="text-4xl font-bold">Sobre mim</h1>
            <div className="md:text-left text-center ">
              <br />
              <p className="text-xl text-center   ">
                Responsável por sempre buscar novas tecnologias para melhorar a
                rotina de desenvolvimento e qualidade de código, assim como o
                treinamento de colaboradores nas stacks e padrões de código das
                empresas. Sou um desenvolvedor orientado a resultados,
                comunicativo e apaixonado por novas tecnologias e que está
                sempre em busca de auto aperfeiçoamento contínuo tanto em
                habilidades técnicas quanto em soft skills. Colaboro bem com
                equipes de desenvolvimento e designers de UX/UI, trabalhando
                lado a lado com desenvolvedores seniores e POs. Gosto de tomar a
                iniciativa de realizar tarefas e propor soluções para desafios
                complexos de desenvolvimento.
              </p>
            </div>
          </CardBody>{" "}
          <div className="mt-16 flex gap-4 flex-col md:flex-row">
            <Hobby />
            <Hobby />
            <Hobby />
            <Hobby />
          </div>
        </Card>
      </section>
      <section
        className="flex flex-col items-center justify-center my-32"
        id="#habilities"
      >
        <Card className="w-full  bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10   p-4">
          <CardBody className="flex  flex-col gap-4 justify-center  backdrop-blur-none backdrop-filter-none p-4 ">
            <h1 className="text-4xl font-bold text-left">Habilidades</h1>
            <Widgets />
          </CardBody>{" "}
        </Card>
      </section>

      <section
        className="flex items-center justify-center my-32 gap-4 flex-col backdrop-blur-sm"
        id="#projects"
      >
        <h2 className="text-2xl bg-gray-400 backdrop-filter  bg-opacity-10   p-4 rounded-xl">
          Projetos
        </h2>
        <div className=" flex flex-col sm:flex-row gap-4 ">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>
    </>
  );
}
