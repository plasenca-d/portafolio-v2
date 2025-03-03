import { Hero } from "@/components/Hero/Hero";
import { Projects } from "@/components/Technologies/projects";
import { Technologies } from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <main>
          <Technologies />
        </main>
        <Projects />
      </div>
    </>
  );
}
