"use client";

interface CardProjectProps {
  name: string;
  link: string;
  description: string;
  background: string;
  period?: string;
  company?: string;
  techs?: string[];
}

export default function CardProject({
  name,
  link,
  description,
  background,
  period,
  company,
  techs,
}: CardProjectProps) {
  return (
    <div
      className="relative bg-cover bg-center h-[430px] w-full max-w-[285px] rounded-xl shadow-lg mx-auto overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 p-4 flex flex-col gap-1">
        <a
          href={link}
          className="text-lg font-bold text-white leading-tight hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        {company && (
          <p className="text-blue-200 text-xs font-medium opacity-90">
            {company}
          </p>
        )}
        {period && <p className="text-blue-300 text-xs opacity-60">{period}</p>}
        <p className="text-blue-50 mt-2 text-sm leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {techs && techs.length > 0 && (
        <div className="relative z-10 p-4 flex flex-wrap gap-1">
          {techs.map((tech) => (
            <span
              key={tech}
              className="bg-blue-600/50 border border-blue-400/40 text-blue-50 text-xs px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
