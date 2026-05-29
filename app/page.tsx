import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Commitments } from "@/components/sections/Commitments";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <Services />
      <Process />
      <Commitments />
      <FAQ />
      <CtaBand />
    </>
  );
}
