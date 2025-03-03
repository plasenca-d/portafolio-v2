import { IExpertise } from "@/interfaces";
import { FaPython, FaReact } from "react-icons/fa6";
import {
  SiDart,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { CardTechnology } from "./CardTechnology";

const listExpertise: IExpertise[] = [
  {
    name: "Backend Developer",
    description:
      "Backend developer passionate about building robust and efficient applications using languages like Python and Typescript, and frameworks like FastAPI, Flask, Nestjs and Express.",
    projectsUrl: "/#",
    tools: [SiTypescript, FaPython, SiNestjs, SiExpress, SiFlask, SiFastapi],
  },
  {
    name: "Frontend Developer",
    description:
      "I'm a passionate frontend developer who works with languages like Javascript and Typescript, and frameworks like React and Nextjs. I love the opportunity to create stunning visual experiences for users and the excitement of seeing how a website design comes to life.",
    projectsUrl: "/#",
    tools: [SiJavascript, SiTypescript, FaReact, SiNextdotjs],
  },
  {
    name: "Mobile Developer",
    description:
      "As a mobile developer, I have experience working with the Dart programming language and the Flutter development framework. I am passionate about the opportunity to create mobile apps that are fluid and attractive to users.",
    projectsUrl: "/#",
    tools: [SiDart, SiFlutter],
  },
];

export function Technologies() {
  return (
    <section className="px-10 flex flex-col items-center pb-10">
      <h2 id="expertise" className="font-bold text-3xl md:text-5xl pb-5">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {listExpertise.map((expertise) => (
          <CardTechnology key={expertise.name} technology={expertise} />
        ))}
      </div>
    </section>
  );
}
