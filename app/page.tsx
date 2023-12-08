"use client";
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
    <section className="flex  items-center justify-center  ">
      <Card className="w-full  bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
        <CardBody className="flex  flex-col   gap-8 md:flex-row justify-center items-center backdrop-blur-none">
          <Image
            isZoomed
            as={NextImage}
            width={300}
            height={300}
            alt="NextUI Fruit Image with Zoom"
            src="/photo.jpg"
			className="w-72"
          />
          <div className="md:text-left text-center ">
            <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
            <h2 className="text-2xl">{siteConfig.description}</h2>
            <br />
            <p className="text-xl">
              Desenvolvedor com {yearsOfExperience} anos de experiência em desenvolvimento e manutenção de sites e aplicativos de alta qualidade
            </p>
            
          </div>
        </CardBody>{" "}
      </Card>
    </section>
  );
}
