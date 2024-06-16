import { Hero } from "@/components/Hero/Hero";
import { Technologies } from "@/components/Technologies/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Technologies />
      </main>
    </>
  );
}
