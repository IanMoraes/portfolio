import { Chip, Tooltip } from "@nextui-org/react";
import React from "react";

export default function widgets() {
  return (
    <div className="flex gap-4">
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
      <Tooltip content="Node.hs">
        <Chip color="primary" variant="shadow">
          Node
        </Chip>
      </Tooltip>
      <Tooltip content="Next.js">
        <Chip color="primary" variant="shadow">
          Next
        </Chip>
      </Tooltip>
      <Tooltip content="Nest.js">
        <Chip color="primary" variant="shadow">
          Nest
        </Chip>
      </Tooltip>
    </div>
  );
}
