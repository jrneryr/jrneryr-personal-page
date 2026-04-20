export default function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-slate-950 to-black text-blue-50 pt-16 pb-10 px-8 flex flex-col items-center gap-12">
      <div className="w-full max-w-4xl flex flex-col items-center gap-10">
        <p className="text-center text-blue-50/60 text-lg font-light max-w-xl leading-relaxed">
          Especialista em desenvolvimento de interfaces modernas, responsivas e
          de alto desempenho, apaixonado por criar experiências digitais
          incríveis —{" "}
          <span className="text-blue-50/90 italic">
            transformando ideias em código e designs em interações fluidas.
          </span>
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/junior-neryr-javascript/"
            target="_blank"
            rel="noopener noreferrer"
            className="whip-button rounded-full px-5 py-2 text-sm font-semibold tracking-widest text-blue-200 hover:bg-blue-400/10 transition"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/jrneryr"
            target="_blank"
            rel="noopener noreferrer"
            className="whip-button rounded-full px-5 py-2 text-sm font-semibold tracking-widest text-white/70 hover:bg-white/10 transition"
          >
            GITHUB
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <p className="text-center text-blue-50/30 text-xs tracking-widest">
          © {year} JUNIOR NERYR — TODOS OS DIREITOS RESERVADOS
          <br />
          <span className="opacity-60">DESENVOLVIDO POR MIM</span>
        </p>
      </div>
    </footer>
  );
}
