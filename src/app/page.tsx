"use client";

import ModalAboutMe from "@/components/ModalAboultMe";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="flex gap-4 justify-between items-center bg-foreground h-20 px-8 fixed top-0 left-0 z-50 w-full">
        <h1 className="text-4xl font-extrabold text-blue-50">Jrneryr</h1>
        <span
          className="text-blue-50 cursor-pointer hover:text-blue-300 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Sobre mim
        </span>
      </header>

      <main className="flex flex-col gap-4">
        <section
          id="presentation"
          className="mt-20 px-8 bg-foreground h-fit flex flex-col"
        >
          <h1 className="text-xs tracking-[8px] font-thin text-blue-50 font-[--font-alternative] opacity-50">
            RUBILAR JUNIOR
          </h1>

          <p className="mt-4 text-blue-50 font-light">
            Bem-vindo ao meu portfólio! Aqui você encontrará uma coleção dos
            meus projetos e experiências.
          </p>
        </section>
      </main>
      <footer className="flex flex-col gap-4"></footer>

      <ModalAboutMe
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
