"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

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
    technologies: ["Odoo", "Python", " Javascript", "CSS", "HTML"],
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
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
                <Swiper
                  modules={[Autoplay, EffectFade, Navigation, Pagination]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {project.imagesUrl.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="flex justify-center place-items-center">
                        <Image
                          src={img}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full object-cover rounded-sm h-[300px] cursor-pointer"
                          onClick={() => {
                            setSelectedImage(img);
                            onOpen();
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
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
                {project.liveUrl && (
                  <Button
                    as={Link}
                    href={project.liveUrl}
                    target="_blank"
                    color="primary"
                    variant="flat"
                  >
                    View Live Project
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Modal
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          <Image
            src={selectedImage}
            alt="Project preview"
            className="w-full h-full object-contain"
          />
        </ModalContent>
      </Modal>
    </>
  );
};
