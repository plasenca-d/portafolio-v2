import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import clsx from "clsx";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Belity App",
    description: "A delivery app for beauty products and services",
    imageUrl: "/projects/belity_project.png",
    liveUrl: "https://belity.app",
    technologies: ["Flutter", "Nextjs", "Nestjs", "Express"],
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Projects I have worked on
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={clsx(
              "border-transparent backdrop-blur-md bg-opacity-20 shadow-lg bg-white",
              "hover:translate-x-1 hover:translate-y-1 hover:shadow-2xl"
            )}
          >
            <CardHeader>
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full object-cover rounded-sm"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-default-500">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, idx) => (
                  <Chip key={idx} size="sm" variant="flat" color="success">
                    {tech}
                  </Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Button
                as={Link}
                href={project.liveUrl}
                target="_blank"
                color="primary"
                variant="flat"
              >
                View Live Project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
