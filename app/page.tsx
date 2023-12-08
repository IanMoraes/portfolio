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
        <CardBody className="flex flex-row gap-8">
          <Image
            isZoomed
            as={NextImage}
            width={240}
            height={240}
            alt="NextUI Fruit Image with Zoom"
            src="/photo.jpg"
          />
          <div>
            <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
            <h2 className="text-2xl">{siteConfig.description}</h2>
            <br />
            <p className="text-xl">
              Desenvolvedor com {yearsOfExperience} anos de experiência em desenvolvimento, manutenção de sites e aplicativos
            </p>
            
          </div>
        </CardBody>{" "}
      </Card>
    </section>
  );
}
