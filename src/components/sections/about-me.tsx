export function AboutMe({ data }: { data: Record<string, string> }) {
  return (
    <div id="aboutme" className="py-10">
      <h2 className="text-base font-medium text-primary/90">about me.</h2>

      <p
        className="mt-4 flex flex-col gap-2 text-base text-left font-normal text-muted-foreground"
      >
        <span>
          {data.INTRO}{" "}
          <span className="hidden sm:inline">{data.EXPERTISE}</span>
        </span>

      </p>
    </div>
  );
}
