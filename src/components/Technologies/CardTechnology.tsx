import NextLink from "next/link";
import { IExpertise } from "@/interfaces";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@heroui/react";
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
        "border border-white/20 bg-white/80 backdrop-blur-md shadow-lg",
        "hover:shadow-xl transition-shadow"
      )}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <CardHeader>
        <p className="font-semibold text-xl text-black">{name}</p>
      </CardHeader>
      <CardContent>
        <p className="text-base text-black/70">{description}</p>
      </CardContent>
      <CardFooter className="flex-wrap">
        <div className="flex items-center gap-2 mb-3">
          {tools.map((Tool: IconType) => (
            <Tool key={Tool.name} className="text-2xl text-gray-700" />
          ))}
        </div>
        <NextLink href={projectsUrl} className="no-underline">
          <Button size="sm" className="bg-primary text-white">
            Projects
          </Button>
        </NextLink>
      </CardFooter>
    </Card>
  );
}
