import { IExpertise } from "@/interfaces";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import clsx from "clsx";
import { IconType } from "react-icons";

export interface Technology {
  name: string;
  description: string;
  projectsUrl: string;
  tools: IconType[];
}

export function CardTechnology({ technology }: { technology: IExpertise }) {
  const { name, description, projectsUrl, tools } = technology;

  return (
    <Card
      className={clsx(
        "border-transparent backdrop-blur-md bg-opacity-20 shadow-lg bg-white",
        "hover:translate-x-1 hover:translate-y-1 hover:shadow-2xl"
      )}
    >
      <CardHeader>
        <p className="font-semibold text-xl">{name}</p>
      </CardHeader>
      <CardBody>
        <p className="text-base">{description}</p>
      </CardBody>
      <CardFooter className="bg-opacity-20 z-10 bottom-0">
        <div className="container grid grid-cols-2">
          <div className="flex items-center">
            {tools.map((Tool: IconType) => (
              <Tool key={Tool.name} className="text-2xl mr-2" />
            ))}
          </div>
          <div className="flex justify-end">
            <Button color={"secondary"} variant="solid" className="rounded-3xl">
              <Link className="text-sm text-inherit" href={projectsUrl}>
                Projects
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
