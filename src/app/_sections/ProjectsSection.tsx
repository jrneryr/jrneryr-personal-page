"use client";

import CardProject from "@/components/CardProject";
import { projectItems } from "@/utils/projectItems";
import { useEffect, useRef } from "react";

export default function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const CARD_WIDTH = 285 + 16; // card width + gap

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="pt-20 h-fit flex flex-col gap-4">
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
        interno de capacitação de colaboradores, processo de compliance, criar e
        aplicar pesquisas internas e externas a nível mundial além da gestão de
        recursos humanos e muito mais.
      </p>

      <p className="text-blue-50 font-light text-xl tracking-[2px] mt-12">
        Algumas coisas nas quais{" "}
        <span className="opacity-50">estou envolvido ⟶</span>
      </p>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto pb-32 scrollbar-hide"
      >
        {projectItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[285px]">
            <CardProject
              name={item.name}
              link={item.link}
              description={item.description}
              background={item.background}
              period={item.period}
              company={item.company}
              techs={item.techs}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
