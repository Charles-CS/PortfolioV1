export default function AboutLoading() {
  return (
    <div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 sm:p-10"
    >
      <div
        className="text-center space-y-4 sm:space-y-6 flex flex-col items-center animate-loading-text"
      >
        <span className="text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
          glad you&apos;re here
        </span>
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-light text-foreground"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          About Me
        </h1>
      </div>
    </div>
  )
}
