import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Badge,
  Tooltip,
} from "@nextui-org/react";
import { IoGameController } from "react-icons/io5";

interface HobbyProps{
    title:string,
    icon: ReactElement
}
export default function Hobby() {
  return (
    <div className="flex flex-col items-center backdrop-blur-none backdrop-filter-none">
      <Tooltip content="I am a tooltip">
        <div className="rounded-xl bg-primary-400  h-12 w-12 top-5 relative z-20 flex items-center justify-center">
          <IoGameController color="#000" size={24} />
        </div>
      </Tooltip>
      <Card className="py-4 " isPressable>
        <CardHeader className="pb-0 pt-2 px-4 flex-col ">
          <h4 className="font-bold text-large text-center">Games</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 text-center">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            earum labore voluptatibus neque
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
