"use client";

import Image from "next/image";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
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
        onClick={onOpenModal}
      >
        Sobre mim
      </span>
    </header>
  );
}
