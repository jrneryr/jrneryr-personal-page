"use client";

import ModalAboutMe from "@/components/ModalAboultMe";
import CardProject from "@/components/CardProject";
import { projectItems } from "@/utils/projectItems";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsRef = useRef<HTMLDivElement>(null);

  const responsive = useMemo(
    () => ({
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    }),
    []
  );

  function scrollToProjects() {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className="flex gap-4 justify-between items-center h-20 fixed top-0 left-0 z-50 w-full default-dark-bg">
        <Image
          src="/logo-white.png"
          alt="Logo"
          width={200}
          height={100}
          className="cursor-pointer"
          onClick={scrollToProjects}
        />

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
              <span className="opacity-50">fazendo atualmente ⟶</span>
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
                  className="w-[695px] rounded-lg shadow-lg overflow-hidden"
                >
                  <video
                    src="/videos/me-working-desktop-format.mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
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
              <span className="opacity-50">estou envolvido ⟶</span>
            </p>

            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3500}
              transitionDuration={500}
              arrows={false}
              className="pb-32"
            >
              {projectItems.map((item) => (
                <CardProject
                  key={item.id}
                  name={item.name}
                  link={item.link}
                  description={item.description}
                  background={item.background}
                />
              ))}
            </Carousel>
          </section>
        </div>

        <div className="default-light-bg ">
          <section
            id="participations"
            className="pt-20 h-fit flex flex-col gap-10"
          >
            <h3 className="font-light text-[30px]">Participações</h3>
          </section>

          <section
            id="final_considerations"
            className="pt-20 h-fit flex flex-col gap-10"
          >
            <div className="flex gap-8 justify-center opacity-50 font-bold">
              <a href="https://www.linkedin.com/in/junior-neryr-javascript/">
                LINKEDIN
              </a>
              <a href="https://github.com/jrneryr">GITHUB</a>
            </div>

            <div className="flex gap-8 justify-center text-center opacity-50">
              Especialista em desenvolvimento de interfaces modernas,
              responsivas e de alto desempenho, apaixonado por criar
              experiências digitais incríveis <br />
              transformando ideias em código e designs em interações fluidas.
            </div>

            <div className="flex justify-center text-center pb-64">
              © {new Date().getUTCFullYear()} Junior Neryr. Todos os direitos
              reservados. <br />
              Desenvolvido por mim.
            </div>
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
