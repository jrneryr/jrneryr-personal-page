"use client";

import ModalAboutMe from "@/components/ModalAboultMe";
import { useRef, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsRef = useRef<HTMLDivElement>(null);

  function scrollToProjects() {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className="flex gap-4 justify-between items-center h-20 fixed top-0 left-0 z-50 w-full default-dark-bg">
        <h1 className="text-4xl font-extrabold text-blue-50">Jrneryr</h1>
        <span
          className="text-blue-50 cursor-pointer personal-hover transition"
          onClick={() => setIsModalOpen(true)}
        >
          Sobre mim
        </span>
      </header>

      <main>
        <div className="flex flex-col default-dark-bg">
          <section
            id="presentation"
            className="mt-20 h-fit flex flex-col gap-4"
          >
            <h1 className="mt-40 text-xs tracking-[8px] font-thin text-blue-50 font-[--font-alternative] opacity-50">
              RUBILAR SANTOS NERY JUNIOR.
            </h1>

            <p className=" text-blue-50 font-light text-[50px] w-[100%] md:w-[70%]">
              Bem-vindo a minha <span className="whip-color">trajetória</span>!
              Aqui você encontrará uma coleção das{" "}
              <span className="whip-color">minhas experiências</span>.{" "}
              <span className="italic">bon voyage</span>
            </p>

            <p className="text-blue-50 font-light text-xl tracking-[2px] mt-12">
              Venha ver o que ando{" "}
              <span
                className="opacity-50 personal-hover transition cursor-pointer"
                onClick={scrollToProjects}
              >
                fazendo atualmente ⟶
              </span>
            </p>
          </section>

          <section
            id="movies"
            className="h-fit w-full pt-4 flex gap-4 items-center  flex-col lg:flex-row"
          >
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-cover bg-center h-64 md:h-96 rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(https://placehold.co/600x400)`,
                  }}
                />
              ))}
          </section>

          <section
            id="projects"
            className="pt-20 h-fit flex flex-col gap-4"
            ref={projectsRef}
          >
            <p className=" text-blue-50 font-light text-[30px] w-[100%] md:w-[70%]">
              Atualmente sou desenvolvedor web Front-end no{" "}
              <a className="text-blue-500" href="https://institutojef.org.br/">
                Instituto J&F
              </a>{" "}
              uma empresa do{" "}
              <a className="text-blue-500" href="https://www.jbs.com.br/">
                grupo JBS
              </a>{" "}
              no desenvolvimento do{" "}
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/posts/jbs_app-sempre-activity-7137509430903910400-VbkC/?originalSubdomain=pt"
              >
                eco sistema Sempre JBS
              </a>
              , uma das inovações do grupo JBS visa automatizar todo o processo
              interno de capacitação de colaboradores, processo de compliance,
              criar e aplicar pesquisas internas e externas a nível mundial além
              da gestão de recursos humanos e muito mais.
            </p>

            <p className="text-blue-50 font-light text-xl tracking-[2px] mt-12">
              Algumas coisas nas quais{" "}
              <a
                className="opacity-50 personal-hover transition-opacity"
                href="#projects"
              >
                estou envolvido ⟶
              </a>
            </p>

            <div></div>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-4"></footer>

      <ModalAboutMe
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
