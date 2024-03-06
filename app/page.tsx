"use client";
import Experience from "@/components/main/Experience";
import { Hero } from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Research from "@/components/main/Research";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Cocurricular from "@/components/main/Cocurricular";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero/> 
        <Skills/>
        <Experience/>
        <Cocurricular/>
        <Projects/>
        <Research/>
      </div>
    </main>
  );
}
