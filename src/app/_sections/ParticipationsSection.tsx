"use client";

import { useEffect, useRef } from "react";
import { participationItems } from "@/utils/participationItems";

export default function ParticipationsSection() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="participations"
      className="pt-20 pb-10 h-fit flex flex-col gap-10"
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-light text-[30px]">Participações</h3>
        <p className="text-foreground/50 text-base">
          Portais de RI desenvolvidos pela{" "}
          <strong className="text-foreground/70">MZGROUP</strong> dos quais fiz
          parte.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {participationItems.map((item, index) => (
          <a
            key={item.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${(index % 4) * 80}ms` }}
            className="fade-in-card group flex flex-col rounded-xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={item.background}
                alt={item.name}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-1 p-4">
              <span className="text-[10px] tracking-widest text-foreground/40 uppercase">
                {item.period}
              </span>
              <h4 className="font-semibold text-base leading-tight text-foreground">
                {item.name}
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
