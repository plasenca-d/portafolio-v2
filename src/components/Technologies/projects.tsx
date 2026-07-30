"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
      <h2 className="section-heading text-3xl md:text-5xl font-bold text-center mb-6">
        Projects I have worked on
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-glass transition-shadow hover:shadow-xl overflow-hidden flex flex-col"
          >
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

            <div className="p-4 pb-2 flex flex-col gap-2 flex-1">
              <h2 className="text-lg font-bold card-fg">{project.title}</h2>
              <p className="text-sm card-fg-muted">{project.description}</p>
            </div>

            <div className="px-4 pb-4 pt-0 flex flex-col gap-2 mt-auto">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="card-chip">
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <NextLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <button className="navbar-btn-outline w-full justify-center mt-1">
                    View Live Project
                  </button>
                </NextLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
