interface ModalAboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAboutMe({ isOpen, onClose }: ModalAboutMeProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center bg-gradient-to-b from-blue-950/95 via-slate-950/95 to-black/95 p-4 backdrop-blur-sm`}
      role="dialog"
      aria-modal="true"
      aria-label="Sobre mim"
    >
      <div className="relative w-full max-w-8xl rounded-2xl border border-blue-300/20 bg-slate-900/85 p-6 shadow-2xl shadow-blue-950/50 md:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md border border-blue-200/25 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-50 transition hover:bg-blue-400/20"
        >
          Fechar
        </button>

        <h2 className="pr-16 text-2xl font-semibold tracking-tight text-blue-50 md:text-3xl">
          Sobre mim
        </h2>

        <section className="mt-6 max-h-[70vh] space-y-6 overflow-y-auto pr-2 text-base leading-relaxed text-blue-50/95 md:text-lg">
          <p>
            Atuando no mercado de TI desde <strong>2016</strong>, desenvolvi uma
            sólida trajetória na criação de plataformas de alto impacto. Minha
            experiência abrange desde o desenvolvimento de sistemas complexos de
            educação (LMS) até soluções estratégicas para o mercado de capitais.
          </p>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-100 md:text-xl">
              Trajetória e Grandes Projetos
            </h3>
            <p>
              Na <strong>Telefónica Educação Digital</strong>, liderei o
              desenvolvimento de plataformas LMS para grandes clientes como{" "}
              <strong>Vivo</strong> e <strong>CIEE</strong>, utilizando uma
              stack robusta com <strong>React, Node.js, Nest e Prisma</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <p>
              Pela <strong>MZGROUP</strong>, a maior consultoria de RI do
              Brasil, colaborei em projetos para empresas de presença global.
              Para facilitar a leitura, destaco alguns dos principais setores
              atendidos:
            </p>

            <ul className="space-y-2">
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <strong>Financeiro e Seguros:</strong> Banco BMG, Bradesco,
                SulAmérica, Caixa Seguradora, Mirae Asset, Vinci, RB Asset, Wiz.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <strong>Indústria, Energia e Logística:</strong> Petrobras,
                Ambev, Cosan, EDP, Light, Usiminas, JSL, Azul, MRS Logística,
                Log CP, Brk Ambiental, Aegea.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <strong>Varejo e Consumo:</strong> Natura, Renner, GPA,
                Heringer, AgriBrasil.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <strong>Saúde e Tecnologia:</strong> Hapvida, OdontoPrev, Totvs,
                Sinqia, Linx.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <strong>Imobiliário e Outros:</strong> São Carlos, Helbor,
                Mills, Tronox, CSU.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-100 md:text-xl">
              Foco Atual
            </h3>
            <p>
              Atualmente integro o time do
              <strong> Instituto J&F (Grupo JBS)</strong>, onde foco no
              desenvolvimento de plataformas web modernas com
              <strong> React</strong> e na entrega de soluções mobile nativas
              com <strong>Flutter</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
