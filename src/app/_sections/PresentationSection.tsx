export default function PresentationSection() {
  return (
    <section id="presentation" className="mt-20 h-fit flex flex-col gap-4">
      <h1 className="mt-40 text-xs tracking-[8px] font-thin text-blue-50 font-[--font-alternative] opacity-50">
        RUBILAR SANTOS NERY JUNIOR.
      </h1>

      <p className=" text-blue-50 font-light text-[50px] w-[100%] md:w-[70%]">
        Bem-vindo a minha <span className="whip-color">trajetória</span>! Aqui
        você encontrará uma coleção das{" "}
        <span className="whip-color">minhas experiências</span>.{" "}
        <span className="italic">bon voyage</span>
      </p>

      <p className="text-blue-50 font-light text-xl tracking-[2px] mt-12">
        Venha ver o que ando{" "}
        <span className="opacity-50">fazendo atualmente ⟶</span>
      </p>
    </section>
  );
}
