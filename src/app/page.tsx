"use client";

import { useState } from "react";
import ModalAboutMe from "@/components/ModalAboultMe";

import Header from "./_sections/Header";
import PresentationSection from "./_sections/PresentationSection";
import MoviesSection from "./_sections/MoviesSection";
import ProjectsSection from "./_sections/ProjectsSection";
import ParticipationsSection from "./_sections/ParticipationsSection";
import Footer from "./_sections/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main>
        <div className="flex flex-col default-dark-bg">
          <PresentationSection />
          <MoviesSection />
          <ProjectsSection />
        </div>

        <div className="default-light-bg">
          <ParticipationsSection />
        </div>
      </main>

      <Footer />

      <ModalAboutMe
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
