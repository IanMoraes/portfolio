import { Chip, Tooltip } from "@nextui-org/react";
import React from "react";

export default function Widgets() {
  return (
    <div className="flex gap-4 items-center justify-center flex-col ">
      <div className="flex gap-4 items-center justify-center ">
        <Tooltip content="HTML5">
          <Chip color="primary" variant="shadow">
            HTML5
          </Chip>
        </Tooltip>
        <Tooltip content="CSS3">
          <Chip color="primary" variant="shadow">
            CSS3
          </Chip>
        </Tooltip>
        <Tooltip content="JavaScript">
          <Chip color="primary" variant="shadow">
            JS
          </Chip>
        </Tooltip>
        <Tooltip content="Typescript">
          <Chip color="primary" variant="shadow">
            TS
          </Chip>
        </Tooltip>
        <Tooltip content="Next.js">
          <Chip color="primary" variant="shadow">
            Next.js
          </Chip>
        </Tooltip>
        <Tooltip content="Tailwind CSS">
          <Chip color="primary" variant="shadow">
            Tailwind
          </Chip>
        </Tooltip>
        <Tooltip content="Material UI">
          <Chip color="primary" variant="shadow">
            Material
          </Chip>
        </Tooltip>
        <Tooltip content="React Native / Expo">
          <Chip color="primary" variant="shadow">
            React Native
          </Chip>
        </Tooltip>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Tooltip content="Node.js">
          <Chip color="danger" variant="shadow">
            Node.js
          </Chip>
        </Tooltip>
        <Tooltip content="Express.js">
          <Chip color="danger" variant="shadow">
            Express
          </Chip>
        </Tooltip>
        <Tooltip content="Nest.js">
          <Chip color="danger" variant="shadow">
            Nest.js
          </Chip>
        </Tooltip>
        <Tooltip content="Swagger">
          <Chip color="danger" variant="shadow">
            Swagger
          </Chip>
        </Tooltip>
        <Tooltip content="Prisma ORM">
          <Chip color="danger" variant="shadow">
            Prisma
          </Chip>
        </Tooltip>
        <Tooltip content="Sequelize">
          <Chip color="danger" variant="shadow">
            Sequelize
          </Chip>
        </Tooltip>
        <Tooltip content="PHP">
          <Chip color="danger" variant="shadow">
            PHP
          </Chip>
        </Tooltip>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Tooltip content="Agile">
          <Chip color="success" variant="shadow">
            Agile
          </Chip>
        </Tooltip>
        <Tooltip content="Scrum">
          <Chip color="success" variant="shadow">
            Scrum
          </Chip>
        </Tooltip>
        <Tooltip content="Kanban">
          <Chip color="success" variant="shadow">
            Kanban
          </Chip>
        </Tooltip>
        <Tooltip content="Azure">
          <Chip color="success" variant="shadow">
            Azure
          </Chip>
        </Tooltip>
        <Tooltip content="Git">
          <Chip color="success" variant="shadow">
            Git
          </Chip>
        </Tooltip>
        <Tooltip content="Jest">
          <Chip color="success" variant="shadow">
            Jest
          </Chip>
        </Tooltip>
      </div>
    </div>
  );
}
