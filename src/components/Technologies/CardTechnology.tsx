import NextLink from "next/link";
import { IExpertise } from "@/interfaces";
import { IconType } from "react-icons";

export function CardTechnology({ technology }: { technology: IExpertise }) {
  const { name, description, projectsUrl, tools } = technology;

  return (
    <div className="card-glass transition-shadow hover:shadow-xl p-5 flex flex-col gap-3">
      <p className="font-semibold text-lg card-fg">{name}</p>
      <p className="text-sm card-fg-muted leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        <div className="flex items-center gap-2 mb-3">
          {tools.map((Tool: IconType) => (
            <Tool key={Tool.name} className="text-xl" style={{ color: "var(--card-fg-muted)" }} />
          ))}
        </div>
        <NextLink href={projectsUrl} className="no-underline">
          <button className="navbar-btn-outline">
            Projects
          </button>
        </NextLink>
      </div>
    </div>
  );
}
