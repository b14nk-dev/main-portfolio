export function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <div id="skills" className="py-10">
      <h2 className="text-base font-medium text-primary/90">
        technical skills.
      </h2>

      <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="grid sm:grid-cols-[170px_1fr] items-end">
            <p>{key}:</p>
            <p className="text-sm text-muted-foreground">{value.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
