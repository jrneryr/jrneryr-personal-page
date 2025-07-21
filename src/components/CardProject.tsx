"use client";

interface CardProjectProps {
  name: string;
  link: string;
  description: string;
  background: string;
}

export default function CardProject({
  name,
  link,
  description,
  background,
}: CardProjectProps) {
  return (
    <div
      className="bg-cover bg-center h-[430px] w-[285px] rounded-lg shadow-lg p-2"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <a href={link} className="text-xl font-bold text-blue-50">
        {name}
      </a>

      <p className="text-blue-50 mt-2">{description}</p>
    </div>
  );
}
