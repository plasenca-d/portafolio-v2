"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Chip,
} from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  title: string;
  description: string;
  imagesUrl: string[];
  liveUrl?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Belity App",
    description: "A delivery app for beauty products and services",
    imagesUrl: ["/projects/belity_project.png"],
    liveUrl: "https://belity.app",
    technologies: ["Flutter", "Nextjs", "Nestjs", "Express"],
  },
  {
    title: "Acurio Restaurants Mobile App",
    description: "A freelance mobile app for warehouse management",
    imagesUrl: [
      "/projects/acurios_1.png",
      "/projects/acurios_2.png",
      "/projects/acurios_3.png",
      "/projects/acurios_4.png",
    ],
    technologies: ["Flutter"],
  },
  {
    title: "Eccommerce Website Grupo Coinp",
    description: "A freelance website for a electronic commerce website",
    imagesUrl: ["/projects/coinp_1.png", "/projects/coinp_2.png"],
    liveUrl: "https://store.grupocoinp.com",
    technologies: ["Odoo", "Python", "Javascript", "CSS", "HTML"],
  },
  {
    title: "Lavid Virtual App",
    description: "A freelance website for a electronic commerce website",
    imagesUrl: [
      "/projects/lavid_1.png",
      "/projects/lavid_2.png",
      "/projects/lavid_3.png",
    ],
    liveUrl: "https://academy.lavid.io/",
    technologies: ["Nextjs", "Nestjs", "Typescript"],
  },
];

export const Projects = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-black dark:text-white">
        Projects I have worked on
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={clsx(
              "border border-white/20 bg-white/80 backdrop-blur-md shadow-lg",
              "hover:shadow-xl transition-shadow overflow-hidden"
            )}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
          >
            <CardHeader className="p-0">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                className="w-full h-48"
              >
                {project.imagesUrl.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <NextLink
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full no-underline"
                    >
                      <Image
                        src={img}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                        style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                      />
                    </NextLink>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardHeader>
            <CardContent className="pb-2">
              <h2 className="text-xl font-bold text-black">{project.title}</h2>
              <p className="text-default-600 text-sm">{project.description}</p>
            </CardContent>
            <CardFooter className="flex-wrap gap-2 pt-0">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <Chip key={idx} size="sm" variant="flat" className="bg-gray-100 text-gray-700">
                    {tech}
                  </Chip>
                ))}
              </div>
              {project.liveUrl && (
                <NextLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline w-full mt-2"
                >
                  <Button size="sm" className="w-full bg-primary text-white">
                    View Live Project
                  </Button>
                </NextLink>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
