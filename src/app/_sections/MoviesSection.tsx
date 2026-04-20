export default function MoviesSection() {
  return (
    <section
      id="movies"
      className="h-fit w-full pt-4 flex gap-4 items-center flex-col lg:flex-row"
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
  );
}
